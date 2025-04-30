# A Comprehensive Review on FinFET, Gate All Around, Tunnel FET : Concept, Performance and Challenges

## 10009504

- ✅ We have moved to 3d shaped silicon since 2011 due to increasing requirements for smaller devices, with a constant fight against short channel effects (SCEs)
- ✅ Main concerns in general chip manufacturing: power dissipation, leakage current, speed of operation and reliability
- ✅ Device dimensions have shrunk from 10 µm in 1970 to 90 nm in the year 2003. Currently device dimensions of 7nm are being produced by the industry in mass scale.
- ✅ Scaling down of device dimensions results in high density, increased speed of operation, reduced power dissipation and low manufacturing cost, but an increase in SCEs
- ✅ This reduces the control of gate on the channel and hence the gate is not able to close the channel fully in off state resulting in high value of leakage current, increasing heat output, making it less suitable for high scaled devices.
- ✅ Many techniques like high K dielectric, non uniform doping, Silicon on Insulator (SOI), strained silicon etc have been used by the researchers in the past which reduces SCE
- ✅ Multigate semiconductor devices not only have improved gate control, low parasitic capacitances, high drive current, low leakage current but also have excellent immunity to SCE, faster switching times, and lower power requirements
- ![[Paper_2/attachments/Gate_shapes.png]]
- ✅ For square channel GAAFET, gate control over the channel is not so precise than as compared to cylindrical channel because of gathering of electric field around the edges of square channel resulting in corner effect which reduces device immunity to short channel effects.
- ✅ in cylindrical channel, the electric field lines are uniformly spread because of the symmetrical nature of cylindrical channel and thus gate control over the channel is more accurate and precise. Overall performance of cylindrical channel GAA is better than square channel GAA
- ✅ FinFETs face many challenges in fabrication process especially when FinFET structures are having multiple fins. Because of thin structure, access resistance of FinFET is high. This leads to problems in formation of 3D junctions during fabrication process
- ✅ GAA are used in biosensors, chemical sensors with high sensitivity due to their high surface-volume ratio. They are also used extensively in solar cell and have high efficiency [30]. GAA are also used to make reliable non volatile memories, SRAM, ring oscillators etc.GAA based SRAM cells have lower power dissipation, ,good noise immunity and  much higher noise margin than planar device cases.


# Characterization and Modeling of Gate-All-Around FET (GAA FET) for Low-Power and High-Performance Applications

## 10582059

- ✅ This 3D architecture enables superior electrostatic control, addressing short-channel effects and potentially leading to improved performance and reduced leakage current compared to previous designs
- ![[Paper_2/attachments/FET.png]]

# Exploration and Analysis of Temperature and Performance of Compound Semiconductor-Based Junctionless GAA FET

## 10526280

- ✅ At low bias conditions (Vdd = 300 mV), short channel devices (Lg = 80 nm) exhibit excellent transconductance (gm ) linearity. The devices also show low saturationcurrent and threshold voltage, making them suitable for low-ower applications
- ![[Paper_2/attachments/Cylindrical_GAA.png]]
- ✅ Additionally, InGaAs JLFETs are more suitable for use in high temperature environments due to their higher temperature coefficient of resistance. This is due to their higher band gap, which makes it more difficult for radiation to penetrate the device and cause damage

# FinFET to GAA MBCFET: A Review and Insights

## 10488424

- ✅ Dual-gate MOS transistors offer many advantages, but they also come with increased complexity in terms of design and fabrication. Dual-gate structures offer several advantages over single-gate, primarily due to their enhanced control over the channel.
- ✅ As we know, the transition from 22nm to 16nm provoked the semiconductor industry to shift from MOSFET to FinFET technology. However, the ongoing reduction in device dimensions (beyond 3nm) within FinFET technology has exposed it to a range of reliability challenges, including issues like SHEs, negative bias temperature instability (NTBI), positive bias temperature instability (PTBI), and stress-induced leakage current (SILC). These reliability challenges have now become a critical impediment in the processes of modeling, designing, and manufacturing advanced technological devices due to their rigorous nature process requirements
- ✅GAA MBC-FET is the ultimate solution that has more than one channel utilized, and each channel is surrounded by gates on all sides that make it a ‘GAA’ structure
- ✅ The device has shown excellent results, including a high saturation current
- ✅ The fabrication of both FinFETs and GAA MBCFETs can be achieved using identical process tools and manufacturing procedures. This eliminates the necessity for additional external tools to manufacture GAA MBCFET technology. As a result, the implementation of this new technology can be seamlessly integrated without incurring extra costs.
- ✅ As the gate in FinFETs surrounds solely three sides of the channel, it leads to one side being without gate control. Conversely, in the context of GAA MBCFET, all sides of the channel are enveloped by gates, substantially enhancing the electrostatic gate control capacity and consequently reducing issues related to leakage. 
- ✅ Power management systems can realize previously unheard-of levels of energy efficiency by utilizing the special qualities of FinFET and GAAFET, meeting the urgent requirement for high-performance, environmentally friendly electronics in a variety of applications.
- ✅ Continued advancements in lithography techniques are essential for achieving smaller feature sizes in GAAFET fabrication. Techniques such as extreme ultraviolet (EUV) lithography are increasingly being explored to overcome the challenges associated with traditional optical lithography [161]. Etching plays a critical role in defining the structures in GAAFETs. Advanced etching techniques, such as cryogenic and plasma-based etching, are important for achieving high precision in shaping nanowires and other features.
- ✅ Made by alternating silicon and silicon germanium
- ✅ Samsung is the first semiconductor foundry that revealed the first chip based on this groundbreaking manufacturing methodology in the summer of 2022, called GAA MBCFET, and planning to shift from FinFET to GAA MBCFET technology very soon. Additionally, Samsung is on track to introduce its second-generation 3nm chips in 2023. In parallel, TSMC is aiming to develop 2nm GAA chips by approximately 2026. Similarly, Intel is also set to launch 2nm GAA chips around 2024.
- ![[Paper_2/attachments/Advancement.png]]


# Opportunities in Device Scaling for 3-nm Node and Beyond: FinFET Versus GAA-FET Versus UFET

## 9078841

- ✅ a 5-nm-thin and 43-nm-tall fin [see Fig. 1(a)] was changed into a four-stacked GAA-LNW [see Fig. 1(b)] expecting to achieve a stronger gate control. However, in doing so, 63% loss in the active channel area leads to significant effective drive current (Ieff ) loss as well as increased parasitic capacitances. -> Swapped for nano sheets instead. Therefore, the LNW width (W ) is extended in the lateral direction making GAA-LNS, from 5nm to 20nm
- ![[Paper_2/attachments/GAA_Voltage.png]]
- ![[Paper_2/attachments/GAA_Current.png]]
- ![[Paper_2/attachments/GAA_comparison.png]]
