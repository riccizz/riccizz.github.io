---
title: "FIG: Flow with Interpolant Guidance for Linear Inverse Problems"
weight: 2
authors: "<strong>Yichi Zhang*</strong>, Yici Yan*, Xiangming Meng, Zhizhen Zhao"
conference: "The Thirteenth International Conference on Learning Representations (ICLR), 2025."
image: "/assets/images/FIG.gif"
project: "https://riccizz.github.io/FIG/"
paper: "https://openreview.net/pdf?id=fs2Z2z3GRx"
code: "https://github.com/riccizz/FIG"
abstract: "Diffusion and flow matching models have recently been used to solve various linear inverse problems in image restoration, such as super-resolution and inpainting. Using a pre-trained diffusion or flow-matching model as a prior, most existing methods modify the reverse-time sampling process by incorporating the likelihood information from the measurement. However, they struggle in challenging scenarios, such as high measurement noise or severe ill-posedness. In this paper, we propose Flow with Interpolant Guidance (FIG), an algorithm where reverse-time sampling is efficiently guided with measurement interpolants through theoretically justified schemes. Experimentally, we demonstrate that FIG efficiently produces highly competitive results on a variety of linear image reconstruction tasks on natural image datasets, especially for challenging tasks. Our code is available at: https://riccizz.github.io/FIG/. "
bibtex: |
  @inproceedings{
    yan2025fig,
    title={{FIG}: Flow with Interpolant Guidance for Linear Inverse Problems},
    author={Yici Yan and Yichi Zhang and Xiangming Meng and Zhizhen Zhao},
    booktitle={The Thirteenth International Conference on Learning Representations},
    year={2025},
    url={https://openreview.net/forum?id=fs2Z2z3GRx}
  }
---
