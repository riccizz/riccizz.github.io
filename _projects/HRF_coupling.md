---
title: "Hierarchical Rectified Flow Matching with Mini-Batch Couplings"
weight: 4
authors: "<strong>Yichi Zhang</strong>, Yici Yan, Alex Schwing, Zhizhen Zhao"
conference: "Under review. "
image: "/assets/images/HRF_coupling.png"
project: "https://riccizz.github.io/HRF_coupling/"
paper: "https://arxiv.org/abs/2507.13350"
code: "https://github.com/riccizz/HRF_coupling"
abstract: "Flow matching has emerged as a compelling generative modeling approach that is widely used across domains. To generate data via a flow matching model, an ordinary differential equation (ODE) is numerically solved via forward integration of the modeled velocity field. To better capture the multi-modality that is inherent in typical velocity fields, hierarchical flow matching was recently introduced. It uses a hierarchy of ODEs that are numerically integrated when generating data. This hierarchy of ODEs captures the multi-modal velocity distribution just like vanilla flow matching is capable of modeling a multi-modal data distribution. While this hierarchy enables to model multi-modal velocity distributions, the complexity of the modeled distribution remains identical across levels of the hierarchy. In this paper, we study how to gradually adjust the complexity of the distributions across different levels of the hierarchy via mini-batch couplings. We show the benefits of mini-batch couplings in hierarchical rectified flow matching via compelling results on synthetic and imaging data. Code is available at https://riccizz.github.io/HRF_coupling"
bibtex: |
  @misc{zhang2025hierarchicalrectifiedflowmatching,
      title={Hierarchical Rectified Flow Matching with Mini-Batch Couplings}, 
      author={Yichi Zhang and Yici Yan and Alex Schwing and Zhizhen Zhao},
      year={2025},
      eprint={2507.13350},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2507.13350}, 
  }
---
