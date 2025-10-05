---
title: "Variational Masked Diffusion Models"
weight: 5
authors: "<strong>Yichi Zhang</strong>, Alex Schwing, Zhizhen Zhao"
conference: "Under review. "
image: "/assets/images/VMD.png"
# project: "https://riccizz.github.io/HRF_coupling/"
# paper: "https://arxiv.org/abs/2507.13350"
# code: "https://github.com/riccizz/HRF_coupling"
abstract: "Masked diffusion models have recently emerged as a flexible framework for discrete generative modeling. However, a key limitation of standard masked diffusion is its inability to effectively capture dependencies among tokens that are predicted concurrently, leading to degraded generation quality when dependencies among tokens are important. To explicitly model dependencies among tokens, we propose Variational Masked Diffusion (VMD), a framework that introduces latent variables into the masked diffusion process. Through controlled experiments on synthetic datasets, we demonstrate that VMD successfully learns dependencies that conventional masked diffusion fails to capture. We further validate the effectiveness of our approach on Sudoku puzzles and text datasets, where learning of dependencies among tokens improves global consistency. Across these domains, VMD enhances both generation quality and dependency awareness, highlighting the value of integrating variational inference into masked diffusion. "
---
