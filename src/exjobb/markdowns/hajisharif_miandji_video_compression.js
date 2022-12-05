const markdown = `
#### Description

Video streams constitute a large part of the daily internet traffic. A one hour long video at 4K resolution and 25 frames per second requires about 2TB of storage if no compression is applied. As a result, it is of utmost need to find solutions to intelligently transfer/use such large amounts of data. Modern video codecs have enabled the streaming of video data over the internet, in real-time, e.g., in a video call, or as demanded, such as YouTube video streaming or Netflix movies. In recent years, there have been some attempts to the standardization of machine learning approaches in video codecs such as MPEG video coding for machine (VCM) standards for machine-to-machine (M2M) or machine-to-human (M2H) communications, as well as JPEG AI, and JVET Neural Network Video Coding (NNVC). This project aims to employ an unsupervised machine learning approach for encoding and decoding a video using sparse representations and applying fast and accurate quantization and entropy coding on the resulting sparse coefficients.


#### Your tasks

Explore using machine learning methods to develop a codec for video streaming. The codec consists of both an encoder and a decoder. You will use an unsupervised machine learning method, named AMDE, to learn a sparse representation of the dataset from a training set. The video frames are then transformed into sparse coefficients which are then quantized and further compressed using an entropy coding algorithm such as Huffman coding. You will carry out an analysis of the quality of the codec in terms of compression efficiency and encoding latency in comparison with state-of-the-art video codec approaches. The source code and required tools for utilizing AMDE will be provided.


#### Your profile

We are looking for 1 student with an interest in machine learning, image processing, and computer graphics.


#### Information

Research group: Computer graphics and image processing

Contact person: Saghi Hajisharif and Ehsan Miandji

Location: The division for Media and Information Technology, Campus Norrköping

Keywords:
* machine learning
* image processing
* compression
* rendering

Level: Master
`;

export default {
	id: "hajisharif_miandji_video_compression",
	title: "A learning-based video compression with sparse representation and entropy coding",
	description: "",
	contact: [
		{
			name: "Saghi Hajisharif",
			url: "https://liu.se/medarbetare/sagha08",
			image: "https://liu.se/-/media/employeeimages/08/employee_image_sagha08.jpeg"
		},
		{
			name: "Ehsan Miandji",
			url: "https://liu.se/medarbetare/miaeh27",
			image: "https://liu.se/-/media/employeeimages/27/employee_image_miaeh27.jpeg"
		},
	],
	location: "Norrköping",
	students: 1,
	image: null,
	markdown,
};
