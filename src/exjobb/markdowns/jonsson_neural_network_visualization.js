const markdown = `
#### Description

Feature visualization answers questions about what a neural network — or
parts of a network — are looking for by generating examples. If we want to
understand individual features, we can search for examples where they have
high values as exemplified in the images above. However, they can be hard to
interpret and the correctness of current implementations are questionable due
to a lack of ground truth comparisons. Furthermore, the initial implementation
for the technique is based on the outdated Tensorflow 1, which does not even
run anymore.


#### Your tasks

Investigate different techniques for generating feature visualizations. For ex-
ample, by optimizing for a given set of values instead of only the high values.
Also try to create verifiable visualizations that can serve as a basis for Tensor-
flow 2 and/or PyTorch implementations.


#### Your profile

We are looking for 1 student with an interest in machine learning and visualiza-
tion.


#### Information

Research group: Computer graphics and image processing

Contact person: Daniel Jönsson

Location: The division for Media and Information Technology, Campus Norrköping

Keywords:
* machine learning
* visualization

Level: Master
`;

import image from "../images/neural.png";

export default {
	id: "jonsson_neural_network_visualization",
	title: "Neural network feature visualization",
	description: "",
	contact: [
		{
			name: "Daniel Jönsson",
			url: "https://liu.se/medarbetare/danjo37",
			image: "https://liu.se/-/media/employeeimages/37/employee_image_danjo37.jpeg"
		},
	],
	location: "Norrköping",
	students: 1,
	image,
	markdown,
};
