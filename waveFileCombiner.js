// This code was written by Andreas Mohr. 
// Last change 20.01.2025.

/*-------------------------------------------------------------------------------------------
                Wave file combiner

This is the heart of the project.
This function combines the wave file of the commited letters and modified the header.
All in the browser to download.


                WAV Header

A .wav header is 44 bytes in size and divided into various fields containing metadata 
about the audio file. This header adheres to the RIFF format (Resource Interchange File Format) 
and includes key fields such as Chunk ID, File Size, Format, Subchunk, Channels, Sample Rate, Bitrate, and more.

    1               2               3               4              
    0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7
0  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                         Chunk ID ("RIFF")                     |
   |                             (ASCII)                           |
4  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                            Chunk Size                         |
8  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Format ("WAVE" in ASCII)                   |
12 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |               Subchunk1 ID ("fmt " in ASCII)                  |
16 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                Subchunk1 Size (min. 16 for PCM)               |
20 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |      Audio Format (1 = PCM)    |      Number of Channels      |
   |                                |      (Mono=1, Stereo=2)      |
24 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                       Sample Rate (Hz)                        |
28 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                     Byte Rate (Bytes/sec)                     |
32 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |            Block Align         |        Bits per Sample       |
   |(Number of bytes *Bits/Sample/8)|      (z.B. 8, 16, 24, 32)    |
36 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                   Subchunk2 ID ("data" in ASCII)              |
40 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Subchunk2 Size (Data length)               |
44 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                    Audiodaten (variable length)               |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   
Explanation of the Fields

    Chunk ID: Contains the string "RIFF" to identify the RIFF format.
    Chunk Size: The size of the entire file starting from byte 8 (44 bytes in total).
    Format: Contains the string "WAVE" to indicate it is a WAV file.
    Subchunk1 ID: Identifies the subchunk as "fmt ", which contains information about the audio format.
    Subchunk1 Size: Usually 16 for PCM audio files.
    Audio Format: 1 indicates uncompressed PCM format.
    Number of Channels: Number of channels (e.g., 1 for mono, 2 for stereo).
    Sample Rate: Sampling rate, e.g., 44100 Hz.
    Byte Rate: Calculated as Sample Rate × Number of Channels × Bits per Sample ÷ 8.
    Block Align: Number of Channels × Bits per Sample ÷ 8. Indicates the number of bytes required for one sample.
    Bits per Sample: Bit depth of the samples (e.g., 16 for 16-bit audio).
    Subchunk2 ID: Identifies the audio data section with "data".
    Subchunk2 Size: Size of the audio data in bytes.
    Audio Data: The section containing the actual PCM audio data.

--------------------------------------------------------------------------------------------*/
export async function combineMultipleWavFiles(urls) {
    // The header size of a WAV file is 44 bytes
    const headerSize = 44;

    // Array to store the audio data
    let audioDataBuffers = [];

    // Total length of all audio data
    let combinedDataSize = 0;

    // Load the first audio file to use its header information
    const firstResponse = await fetch(urls[0]);
    const firstArrayBuffer = await firstResponse.arrayBuffer();

    // Store audio settings from the first file
    const firstDataView = new DataView(firstArrayBuffer);
    const sampleRate = firstDataView.getUint32(24, true);
    const byteRate = firstDataView.getUint32(28, true);
    const blockAlign = firstDataView.getUint16(32, true);
    const bitsPerSample = firstDataView.getUint16(34, true);
    const numChannels = firstDataView.getUint16(22, true);

    // Read and store the audio data
    for (const url of urls) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioData = new Uint8Array(arrayBuffer, headerSize);  // Extract the audio data, without header
        audioDataBuffers.push(audioData);
        combinedDataSize += audioData.length;
    }

    // Calculate the total file size, including the header
    const combinedFileSize = 36 + combinedDataSize;
    const combinedData = new Uint8Array(headerSize + combinedDataSize);

    // Write the header for the combined file
    combinedData.set([0x52, 0x49, 0x46, 0x46], 0); // Set "RIFF" in bytes 0-3.
    combinedData[4] = combinedFileSize & 0xFF;
    combinedData[5] = (combinedFileSize >> 8) & 0xFF;
    combinedData[6] = (combinedFileSize >> 16) & 0xFF;
    combinedData[7] = (combinedFileSize >> 24) & 0xFF;
    combinedData.set([0x57, 0x41, 0x56, 0x45], 8); // Set "WAVE" in bytes 8-11.

    // fmt-Chunk (sample rate, bit resolution)
    combinedData.set([0x66, 0x6d, 0x74, 0x20], 12); // "fmt "
    combinedData.set([0x10, 0x00, 0x00, 0x00], 16); // Subchunk1Size (16 for PCM)
    combinedData.set([0x01, 0x00], 20);             // AudioFormat (1 for PCM)
    combinedData[22] = numChannels & 0xFF;          // (Mono oder Stereo)
    combinedData[23] = (numChannels >> 8) & 0xFF;

    // Sample rate in bytes 24-27
    combinedData[24] = sampleRate & 0xFF;
    combinedData[25] = (sampleRate >> 8) & 0xFF;
    combinedData[26] = (sampleRate >> 16) & 0xFF;
    combinedData[27] = (sampleRate >> 24) & 0xFF;

    // Byte rate in bytes 28-31.
    combinedData[28] = byteRate & 0xFF;
    combinedData[29] = (byteRate >> 8) & 0xFF;
    combinedData[30] = (byteRate >> 16) & 0xFF;
    combinedData[31] = (byteRate >> 24) & 0xFF;

    // Block size in bytes 32-33
    combinedData[32] = blockAlign & 0xFF;
    combinedData[33] = (blockAlign >> 8) & 0xFF;

    // Bits per sample in bytes 34-35
    combinedData[34] = bitsPerSample & 0xFF;
    combinedData[35] = (bitsPerSample >> 8) & 0xFF;

    // Data-Chunk
    combinedData.set([0x64, 0x61, 0x74, 0x61], 36); // data

    // Length of audio data in bytes 40-43
    combinedData[40] = combinedDataSize & 0xFF;
    combinedData[41] = (combinedDataSize >> 8) & 0xFF;
    combinedData[42] = (combinedDataSize >> 16) & 0xFF;
    combinedData[43] = (combinedDataSize >> 24) & 0xFF;

    // Append the audio data sequentially
    let offset = headerSize;
    for (const audioData of audioDataBuffers) {
        combinedData.set(audioData, offset);
        offset += audioData.length;
    }

    // Create a blob
    const blob = new Blob([combinedData], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);


    const audio = new Audio(url);
    downloadLinkPage(url);

}

export function downloadLinkPage(url) {
    text.style.display = 'block'
    text.href = url;
    text.download = "combined_audio.wav";
    text.text = "Download Audio File";


}
/*-------------------------------------------------------------------------------------------
                
--------------------------------------------------------------------------------------------*/