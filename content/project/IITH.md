+++
client_name = ""
date = "2013-07-09"
image = ""
image_preview = ""
summary = "Summer Internship 2013 : IIT Hyderabad"
tags = []
title = "Colorimetric Analysis with a Mobile Phone"
external_link = ""

+++

### An enhanced algorithm for the quantification of human chorionic gonadotropin (hCG) level in commercial home pregnancy test kits
#### **Guides**:
- Dr. Sumohana Channappayya, Associate Professor, Department of Electrical Engineering, IIT Hyderabad
- Dr. Dhananjaya Dendukuri, Co-founder & CEO, Achira Labs Pvt. Ltd., Bangalore

This was a continuation and an improvement of the work "*An Automated Algorithm for the Quantification of hCG Level in Novel Fabric-based Home Pregnancy Test Kits*", by K Manasa et al. accepted for presentation at IEEE Asilomar Conference on Signals, Systems and Computers 2013, Pacific Grove, CA USA, November 2013.

The overall aim of the project was to develop a novel image processing algorithm that can be used in conjunction with pregnancy kits based on lateral flow immunoassay techniques for the automated detection and classification of human chorionic gonadotropin (hCG). At present, home pregnancy kits give only qualitative information about the presence of hCG in urinary/serum samples. An analysis of the test kit’s output image using the proposed algorithm will lead to quantitative information about the concentration of hCG, which is in fact more helpful for medical purposes than just a binary yes/no result to the pregnancy test. The algortihm first segmented the image to locate the stripes and then identified the control and test stripes. The color components of the test stripes were then classified into different levels based on the intensities of the test stripes. Furthermore, the algorithm was implemented on a mobile platform which is of great value addition in case of remote rural health monitoring.

#### The proposed algorithm produced results with accuracy consistently above 95%, which was a considerable improvement over the previously achieved 80%.

The results of the project have been <a href="/publication/pregnancy-test-kits">published</a> in the IEEE National Conference on Communications (NCC) 2014, Kanpur, India, February 2014.

<!-- ![Image of the result obtained on the test kit](/img/uploads/TestKit_Image.jpg) ![Image of the result obtained on the test kit](/img/uploads/TestKit_ROI.jpg) -->

<center><figure><img src="/img/uploads/TestKit_Image.jpg"><figcaption>Image of the result obtained on the test kit</figcaption></figure>
<figure><img src="/img/uploads/TestKit_ROI.jpg"><figcaption>In the entire image of the test kit, the only region which concerns us is the small window where the test results appear. Therefore, we crop that particular region and use it for further processing. As it is evident from the image, the stripe on the left side is known as Test Stripe and that on the right is known as the Control Stripe.</figcaption></figure>
</center>

##### **Tools used**: MATLAB