const markdown = `
#### Description

Photo-realistic rendering requires accurate modeling of the appearance of real-
world materials using the bidirectional reflectance distribution function (BRDF).
There are various ways to model BRDFs, and in practice due to their compact
and flexible form, analytic BRDF models are often employed to estimate the sur-
face properties. However, these models despite being efficient for rendering,
are not very realistic. Measured BRDFs on the other hand can accurately model
a realistic appearance, but they are often computationally expensive and con-
sume significantly more memory, which makes them impractical for real-world
applications. It has been shown, however, with sparse modeling of measured
BRDFs, a non-parametric model can be defined that reduces the dimension-
ality of the BRDF, and therefore the rendering cost. Sparse modeling enables
rendering speeds competitive with analytical models while admitting realistic
modeling of BRDFs.


#### Your tasks

You will explore how non-parametric sparse BRDF modeling can be utilized for
realistic rendering. You will modify an existing ray tracer such as PBRT/Mitsuba
or write your own ray tracer to employ the non-parametric BRDF model and
analyze the capability of this model for fast and realistic rendering. The source
code and required tools for sparse BRDF modeling is available. An analysis
of how the parameters of sparse modeling affect the quality and efficiency of
rendering is required as well.


#### Your profile

We are looking for 1-2 students with a background in machine learning and
computer graphics.


#### Information

Research group: Computer graphics and image processing

Contact person: Saghi Hajisharif and Ehsan Miandji

Location: The division for Media and Information Technology, Campus Norrköping

Keywords:
* machine learning
* rendering
* BRDF
* sparse representations

Level: Master
`;

import image from "../images/brdf_render.png";

export default {
	id: "hajisharif_miandji_learning_based_rendering",
	title: "Learning-based rendering using a data-driven BRDF model",
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
	image,
	markdown,
};
