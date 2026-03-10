---
title: Low Hashrate on 3060 Ti LHR
description: 'ErgoForum discussion: Low Hashrate on 3060 Ti LHR'
tags:
- autolykos
- ergo-explorer
- ergoforum
- ergoscript
- ido
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/low-hashrate-on-3060-ti-lhr/1906
created: '2021-07-06'
last_activity: '2022-11-18'
posts_count: 156
views: 78390
likes: 46
glossary_hits:
- Autolykos
- Ergo Explorer
- ErgoScript
- IDO
---

# Low Hashrate on 3060 Ti LHR

> **Forum thread:** [https://ergoforum.org/t/low-hashrate-on-3060-ti-lhr/1906](https://ergoforum.org/t/low-hashrate-on-3060-ti-lhr/1906)
> **Category:** Uncategorized | **Created:** 2021-07-06 | **Posts:** 156 | **Views:** 78390

**Related concepts:** Autolykos, Ergo Explorer, ErgoScript, IDO

---

### Post #1 — @Tom (2021-07-06)

Hi all,

I am very new to mining and having a problem with my GPU setting for Ergo. I have seen people achieve 170 MH/s at 130W on 3060 Ti with this setting:  
Core Clock -300  
Mem Clock +1300  
PL 65%

However, I am stuck at 90 MH/s at 130W with the same setting. I understand that LHR only applies to ETH and ETC mining, but not anything else, right? I don’t know what I am doing wrong here.

[![ERG Setting](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/ae581e5b9ce2b70125121887b89fc50e976cf5f1_2_690x249.jpeg)

ERG Setting1569×568 176 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/ae581e5b9ce2b70125121887b89fc50e976cf5f1.jpeg "ERG Setting")

My system  
CPU: Intel core i7-11700K  
MB: Gigabyte Z590 Aorus Pro AX  
GPU: Gigabyte Geforece RTX 3060 Ti Eagle (LHR)  
OS: Win 10 64-bit  
Pool: Nanopool

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/b/bf71826791aa00c35ce05fbfee7ee397e4267f43.png)
[GIGABYTE](https://www.gigabyte.com/Graphics-Card/GV-N306TEAGLE-8GD-rev-20#kf)

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/d/db3c921a24a1c038c97e5caf8d112dde940383b7_2_500x500.png)

### [GeForce RTX™ 3060 Ti EAGLE 8G (rev. 2.0) Key Features | Graphics Card -...](https://www.gigabyte.com/Graphics-Card/GV-N306TEAGLE-8GD-rev-20#kf)

Discover AORUS premium graphics cards, ft. WINDFORCE cooling, RGB lighting, PCB protection, and VR friendly features for the best gaming and VR experience!

Thank you!!

---

### Post #2 — @jjweng (2021-07-06)

I have the same issue ![:frowning:](https://emoji.discourse-cdn.com/twitter/frowning.png?v=9 ":frowning:")

---

### Post #3 — @TranLinh (2021-07-06)

I have same issue. But My setting can achieve 137Mhs  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/176b0a6b2ba7d197d3dc23dbae23306b966d4109_2_375x500.jpeg)

image1512×2016 1.54 MB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/176b0a6b2ba7d197d3dc23dbae23306b966d4109.jpeg "image")

---

### Post #4 — @Sourabh (2021-07-12)

[@jjweng](/u/jjweng), [@TranLinh](/u/tranlinh) - are your cards also “Gigabyte Eagle LHR”?

---

### Post #5 — @ModzMaster (2021-07-12)

try using NVIDIA unlocked hashrate beta driver 470.05, i used that with my RTXs 3060 (not ti), if that dont works try using hiveos using lolminer 1.31 that have hashrate semi unlocker for LHR GPUs

---

### Post #6 — @admjames (2021-07-12)

same issue here with asus 3060ti-mini LHR…only get 132MH/s on 466.77 driver

the 470.05 driver won’t work on V2 LHR chips…

any help? I see 3070Ti LHR could achieve 180MH/s on ERGO with no limits…

---

### Post #7 — @whirleyes (2021-07-12)

i’m on the same boat. max 132mhs, driver 470  
what memory type you guys have?

[![IMG_20210711_121600](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/b6f13eb57c169abc333a304c7c6deaa4e0e986fa_2_375x500.jpeg)

IMG\_20210711\_1216003000×4000 2.43 MB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/b6f13eb57c169abc333a304c7c6deaa4e0e986fa.jpeg "IMG_20210711_121600")

---

### Post #8 — @admjames (2021-07-13)

Mine is Hynix…I think it is the LHR issue

Btw how do you manage to install 470 driver on LHR 3060Ti?

---

### Post #9 — @whirleyes (2021-07-13)

same hynix. i can only set max memory speed up until 7800mhz. above this will crash.

beta driver from this ppa, so far 470 the most stable in my setup.

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/d52fe0cca49e563b44794f1a7b0e3314c2688742.png)
[Launchpad](https://launchpad.net/~albertomilone/+ppa-packages)

### [PPA packages : Alberto Milone](https://launchpad.net/~albertomilone/+ppa-packages)

Interests
- foreign languages (English, Spanish)
- programming
- improving the user experience with Xorg and the system in general
My main fields of action in Ubuntu are:
- maintenance of the NVIDIA driver
- installation of non-free graphics...

---

### Post #10 — @admjames (2021-07-13)

Oh I thought it’s windows 10 version!  
Thx

---

### Post #11 — @1389MaRe (2021-07-15)

Gigabyte Geforece RTX 3060 Ti Eagle (LHR)  
HiveOS, N 465.31, nbminer 38.1  
900 2700 125 (99-106w)  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/1bb3d18ee6c4cc2b2d60b9cd4d09ab489b4c2312_2_690x387.png)

image1366×768 74.6 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/1bb3d18ee6c4cc2b2d60b9cd4d09ab489b4c2312.png "image")

---

### Post #12 — @130nrd (2021-07-23)

Have you tried the 470.05 driver? Does it help?

---

### Post #13 — @130nrd (2021-07-24)

Similar hash rate here for Samsung memory, only getting around 137 Mhs with core clock -625, memory clock +1350 and PL 112W. Has anyone tried the curve settings on afterburner?

---

### Post #14 — @1389MaRe (2021-07-24)

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/256eed77e074a8d738db7e578ca57887f70ef562_2_690x387.png)

image1366×768 88.3 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/256eed77e074a8d738db7e578ca57887f70ef562.png "image")

  
With this settings i get around 140 Mh/s but drop to 127 and work stable on that hash.

---

### Post #15 — @sgs72 (2021-07-29)

please can anyone help withn rtx 3060 for mining…drop me from 46mhz to 23 mhz  
i have 470.05 ang dummy

---

### Post #16 — @gitong (2021-07-30)

whats best driver for 3060 ti LHR then? my card can reach 133MHs first, then the speed drop between 70-90MHs if I dont use my PC. Or should I change to PCIe3 / turn off the resizeable BAR / put the hdmi dongle on? help guys

---

### Post #17 — @0r0chit0 (2021-08-01)

Hi to all, i have 3 3060ti LHR, zotac twin edge to be exactly. Everytime I do some set up at the msi after burner it’s ok, but if I run the Nb miner, it give me error and automatically set the cards to default.  
Same when using nicehash quickminer. This card just work with default settings. any help how to set them up  

[![3060ti lhr](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/29f4003d22ab76107a87458dbe1f946e9af40448_2_690x388.jpeg)

3060ti lhr1920×1080 203 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/29f4003d22ab76107a87458dbe1f946e9af40448.jpeg "3060ti lhr")

---

### Post #18 — @Pulgio (2021-08-06)

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/3fe47d286f06a94dbe1056e70576bb6c7345a81d_2_689x78.png)

image1240×141 16.6 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/3fe47d286f06a94dbe1056e70576bb6c7345a81d.png "image")

  
I have this values.

---

### Post #19 — @tomnguyenvnuk (2021-08-16)

Which OC settings do you make use of for 3060ti?

---

### Post #20 — @Kevin (2021-08-17)

around 130-135 better… different setting with samsung and hyrix

---

### Post #21 — @Teteus (2021-08-18)

I have one 3060 TI LHR Palit OC and having 130-132 MHs on NBminer.  
Clock -200, Mem +950 at 119 W.  
It seems that some LHR affects also ergo mining. You can check the hash diferences between the 3060 and the 2060 TI at the whattomine website.

---

### Post #22 — @ottosm (2021-08-19)

Hi, did you find any way to overcome this problem? If I try to OC the MSI 3060 ti LHR, card is just reseting.

---

### Post #23 — @levatba (2021-08-22)

[![Screenshot from 2021-08-22 17-35-36](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/d9096f475932813811c6729c487f2796c6222d7a_2_690x116.png)

Screenshot from 2021-08-22 17-35-361236×209 55.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/d9096f475932813811c6729c487f2796c6222d7a.png "Screenshot from 2021-08-22 17-35-36")

Asus 3060 ti dual OC v2 LHR / Hynix Memory.  
Got stable 130 but now experimenting a little. I hope for 140Mh/s.

---

### Post #24 — @okay27 (2021-08-23)

Something wrong about LHR cards. I had MSi RTX 3060 Ti Gaming X LHR (Dual Fan) with Hynix memory. It was stable 131 mh/s 116w but now I got Galax RTX 3070 LHR 1 click oc. Its worse than msi rtx 3060 ti gaming x. It stuck 91 mh/s even with Samsung memory. I guess lhr cards have limit on any kind mining.

---

### Post #25 — @Instamaster (2021-08-25)

I have PNY which seems that have the same bios, try this on Linux, Core Clock 1060, Memory Clock 2600, PL 130, you should get around 120 Mhs

---

### Post #26 — @Solanosucre (2021-08-25)

Has anyone experienced 90mh stuck on Gigabyte GeForce RTX 3060 Ti GAMING OC PRO 8GB V3 LHR Graphics Card? Just ordered from Amazon and I have some doubt about V3 cards as noticed some comments like also Ergo is limited to 90mh on V3 cards.

---

### Post #27 — @525455383 (2021-08-25)

also, I think you are right.

---

### Post #28 — @525455383 (2021-08-25)

i have the same problem, OC is setting, but just 90mH.

---

### Post #29 — @OmegaChimp (2021-08-25)

Hey mate I do have a 3060 TI LHR PNY that gave me a bit of headache but I got stable at 130.1 the OC settings for Hive is Absolute core clock at 1310 memory at 1920 PL 140 (about 110 W ) and 80 % fan (50/53 temp) =) quite solid OC and it is working for 2 days without any reject . Luck there mate =) cheers

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/f5ca17ea68fdadc151090aef3ed238d547218da6_2_690x101.jpeg)

image1920×282 74.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/f5ca17ea68fdadc151090aef3ed238d547218da6.jpeg "image")

---

### Post #30 — @Instamaster (2021-08-25)

You have Hynix memories, I have Samsung ![:frowning:](https://emoji.discourse-cdn.com/twitter/frowning.png?v=10 ":frowning:")

---

### Post #31 — @llamafarmer (2021-08-25)

I picked up a Gigabyte Eagle OC 3060 ti LHR V2 (Samsung DDR6) yesterday and it’s definitely super-nerfed for mining ERG. Can’t get over 90mhs on any OC settings. Weirdly, I switched to RVN and it’s pulling 29mhs no problems so I will stick to that. Also was able to get 43mhs on ETH using NBminer.

---

### Post #32 — @okay27 (2021-08-25)

There is no problem unlock lhr cards to get 42-43 mh/s for eth. Many 3060ti/3070 lhr cards stuck 90-91 mh/s for ergo.

---

### Post #33 — @ambrozy (2021-08-25)

Not sure if I was lucky, but haven’t had any problems getting them to work on 130-ish MH/s:

[![hiveos](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/4015c3c9a5d8378488b2d8a2b3db3ed4bc141661_2_690x53.png)

hiveos1201×93 24.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/4015c3c9a5d8378488b2d8a2b3db3ed4bc141661.png "hiveos")

---

### Post #34 — @z666z (2021-08-26)

<https://www.gpu-monkey.com/en/compare_gpu-gigabyte_geforce_rtx_3060_ti_vision_oc_8g_rev._2.0_lhr-2042-vs-gigabyte_geforce_rtx_3060_ti_vision_oc_8g-161>

It seems LHR may have influence on mining EHT (ca -50%) and ERGO (ca -25%).

Ravencoin and VTC can be mininig without loss.

---

### Post #35 — @keewee23 (2021-08-27)

Gigabyte v2 version?

---

### Post #36 — @kokMiner (2021-08-27)

I have a similar problem. I have 12x Gigabyte GeForce RTX 3060Ti Gaming OC LHR (GV-N306TGAMINGOC-8GD 2.0). Performance drops to 85-90 Mh / s but not on all cards! All cards are the same version of REV 2.0. Every time after restarting and changing ports, the same cards keep the same performance.

[![Screenshot_27](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/3737213819144009d42ec910b718fba890f7bd04_2_690x333.png)

Screenshot\_271218×588 91.5 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/3737213819144009d42ec910b718fba890f7bd04.png "Screenshot_27")

---

### Post #37 — @ambrozy (2021-08-27)

Yes, REV 2.0, GV-N306TEAGLE-8GB

---

### Post #38 — @ambrozy (2021-08-27)

With your settings my Palit went down from 135 Mh/s to 75. So not sure if there params are the best.

---

### Post #39 — @keewee23 (2021-08-27)

I have gigabyte 3060ti v2.0 eagle and has problems with ergo, it’s oscilating from 70-107 mhs, crap, fortunately i can return it, does anyone have experience with msi 3060ti ventus v2.0?

---

### Post #40 — @kokMiner (2021-08-27)

Try to use [ambrozy](https://www.ergoforum.org/u/ambrozy) clocks:  
core: -625 mem: 2700 PL: 110

[![Screenshot_32](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/bb5bad80bbfbf959b5f7fd26cf453b604bad1b45_2_689x307.png)

Screenshot\_321207×538 92.8 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/bb5bad80bbfbf959b5f7fd26cf453b604bad1b45.png "Screenshot_32")

---

### Post #42 — @keewee23 (2021-08-27)

translated to msi afterburner on windows 10? Thanks.

---

### Post #43 — @kokMiner (2021-08-27)

I’m not sure if MSI AB will let you lower the core clock that much, if so then -625. Lower the power limit until the miner shows consumption of 110 for the GPU. Memory clock: +1350

---

### Post #44 — @1389MaRe (2021-08-28)

What miner are you using?

---

### Post #45 — @1389MaRe (2021-08-28)

[![zzz](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/50d11f931dca534bfe058b4b4c29bc37e7d1b11e_2_690x169.jpeg)

zzz1203×295 42.8 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/50d11f931dca534bfe058b4b4c29bc37e7d1b11e.jpeg "zzz")

  
This is te best settings, u all can try this, and only what u need to chane is PL, bcs every card need different PL

---

### Post #46 — @okay27 (2021-08-29)

These cards are LHR?

---

### Post #47 — @demusss (2021-08-29)

youre 3060 ti dont work for me. The best I can get is around 128 MH  
with core -1000 mem 2000 pl 120  

[![Screenshot 2021-08-29 174838](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/08baf5a5937604f3c8c8925630d8a83892c7a1b5_2_690x54.png)

Screenshot 2021-08-29 1748381213×95 15.8 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/08baf5a5937604f3c8c8925630d8a83892c7a1b5.png "Screenshot 2021-08-29 174838")

---

### Post #48 — @demusss (2021-08-29)

what does the 94.94.46.40.9B mean? Yours has 9A on the end.  
![Screenshot 2021-08-29 174838b](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/2d7d751c901349d50bf5fa64df3b18e1de6b873c.png)

There’s 2 versions of LHR isn’t there?

---

### Post #49 — @veefan (2021-08-29)

hi,  
I read the previous comments, it helped me to improve my cards,  
here’s the best i get for now (3 differens 3060ti lhr) :  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/f6191e69895268a0133e0377feecc44501e19946_2_690x190.png)

image1858×514 73.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/f6191e69895268a0133e0377feecc44501e19946.png "image")

  
not even 130 Mhs but close.

The gigabyte with samsung memory looks more ‘LHR’s’ than the two others with hynix memory.  
Any suggestion of more tuning ?

---

### Post #50 — @demusss (2021-08-29)

![](https://avatars.discourse-cdn.com/v4/letter/v/ce7236/48.png) veefan:

> The gigabyte with samsung memory looks more ‘LHR’s’ than the two others with hynix memory.  
> Any suggestion of more tuning ?

Figured out the 94.04.46.40.9B is the vbios version

Looks like your GPU 1 is the same as mine. Gigabyte TRX Eagle OC rev 2.0

have you tried core -1000, mem 2000, pl 120 ?  
I’m using nbminer

---

### Post #51 — @levatba (2021-08-29)

[![Screenshot from 2021-08-29 21-47-03](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/68894b8e304b90fb78a7dddcaad9fd317c3055da_2_690x113.png)

Screenshot from 2021-08-29 21-47-031215×200 40.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/68894b8e304b90fb78a7dddcaad9fd317c3055da.png "Screenshot from 2021-08-29 21-47-03")

Hynix here also, testing with Trex and you can see the results.

---

### Post #52 — @Lachemou (2021-08-29)

Same issue 178MH/s with 3070 ti and 128 with 3060 ti zotac hynix memory

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/a850938f7a442f895fdb68f0a72bdf4a4d74cc30_2_690x62.jpeg)

image2175×197 72.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a850938f7a442f895fdb68f0a72bdf4a4d74cc30.jpeg "image")

---

### Post #53 — @veefan (2021-08-29)

yes, same eagle oc (rev 2 so) and nbminer also  
thanks for your settings ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:") :  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/2425515676c52a4bb2799c569e685cddac23e0fe_2_690x27.png)

image1858×73 19.5 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/2425515676c52a4bb2799c569e685cddac23e0fe.png "image")

---

### Post #54 — @veefan (2021-08-29)

better results also with your settings under T-rex ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/89611e2496552807e81dedceecaa609fc2af340e_2_690x78.png)

image1840×209 53.8 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/89611e2496552807e81dedceecaa609fc2af340e.png "image")

i suppose the 2Mh more you have is linked with your lowers temp.

(the gigabyte samsung memory one still a little behind, more tuning to do)

---

### Post #55 — @killermaxsm (2021-08-29)

Hola chicos, tengo un problema con RTX 3060TI LHR GYGABYTHE VISION V2 8 GB, esta grafica no pasa de los 81 mhs stock, cuando de aplico overclocking llega a 100 mhs pero cae rapidamente, la memoria es samsung, alguien tiene esta grafica que me pueda ayudar? y el aftherburner el memory clock no pasa de 1900 y limite de poder 104 alguna solucion?

---

### Post #56 — @demusss (2021-08-30)

I’ve changed to T-Rex and reduced core slightly. Each GPU reacts differently. I’ve not tested different MEM settings.  

[![Screenshot 2021-08-30 021018](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/8e2c8d69b943b037ba04d36de3b0f01b8dedacdf_2_689x204.png)

Screenshot 2021-08-30 0210181237×367 62.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/8e2c8d69b943b037ba04d36de3b0f01b8dedacdf.png "Screenshot 2021-08-30 021018")

---

### Post #57 — @Ovidiu78 (2021-08-30)

Usually I don’t live any comments or advice but all of you guy are unbelievable. First of all. 30×× series use the same chip depending of the brand. Each company restrict the chip depending of the benchmark to not crash or overload the card. If you are smart enough install cuda developer driver and all the packages, install phyton or c++ is same  
Conected to the chip of your card and in the portal you will see all the settings. So on THR (technical hash limit) change to null or open. On clock- minus change to max and memory clock change to max. Save the dat file inside the chip. You will get max hash rate for 3060 like 3090 and more. Of course your card it will crash if you do overclock with afterburner or any other. In ergo 3060ti can get 320mh no overclock.  
Just learn before give advice and you can show your overclock to everyone it will not match if the series chip not made from the same techinal team.

Enjoy mining

---

### Post #58 — @veefan (2021-08-30)

thanks ovidiu78 for this advice, it seems a radical other path, will try to understand the method and explorer this.  
in the portal : is it a tool coming with the cuda developer driver ?

---

### Post #59 — @Lachemou (2021-08-30)

Are you totally crazy or a genius? I’m french and I have partially understood your answer…

---

### Post #60 — @veefan (2021-08-30)

my last tuning for 3 differents 3060ti lhr :  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/35946039f85d8df6345b97b073669692690070ae_2_690x92.png)

image1866×251 65.6 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/35946039f85d8df6345b97b073669692690070ae.png "image")

  
that give 400 MH/s for 360W 3 cards

---

### Post #61 — @PotatoHead (2021-08-31)

![](https://avatars.discourse-cdn.com/v4/letter/o/dec6dc/48.png) okay27:

> stable 131 mh/s 116w but now I got Galax RTX 3070 LHR 1 click oc. Its worse than msi rtx 3060 ti gaming x. It stuck

My 3070 Zotac LHR is garbage too. The best I could get was 85mhs. If pluged to a monitor and being used by some video codec it starts around 133mhs and quickly drops to 85 again.

---

### Post #62 — @Ovidiu78 (2021-08-31)

Let’s say I’m totally crazy

---

### Post #63 — @kokMiner (2021-08-31)

Sounds very interesting, I’m willing to take a chance on one of my GPUs. Can you provide more details?

---

### Post #64 — @gordon (2021-08-31)

Sounds very very good. Let’s test. If the card get broken, than shit happens ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")  
I have install the Nsight System (the cuda developer pack from NVIDIA). Connect the card with visual studio?

---

### Post #65 — @siluro (2021-08-31)

Just bought a eagle 3060 TI as well Hoping [@Ovidiu78](/u/ovidiu78) will share his wisdom. Not happy with the LHR thing we pay lots of money for our cards. absolute bullshit!! If I pay for it I should be able to use it for whatever I want. Like buying a house but they cement one half closed and say you cant use it FFS

---

### Post #66 — @gordon (2021-08-31)

[![grafik](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/c28db132fe358fee50d4c2868a3cf3bb53f4faaa_2_363x500.png)

grafik620×852 64.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/c28db132fe358fee50d4c2868a3cf3bb53f4faaa.png "grafik")

---

### Post #67 — @gordon (2021-08-31)

Where I can find the THR?!

```ergoscript
CUDA
    CUDA Device
        Name                                                                NVIDIA GeForce RTX 3060
        Driver                                                              WDDM
        DeviceIndex                                                         0
        GPU Family                                                          GA106-A
        RmGpuId                                                             26880
        Compute Major                                                       8
        Compute Minor                                                       6
        MAX_THREADS_PER_BLOCK                                               1024
        MAX_BLOCK_DIM_X                                                     1024
        MAX_BLOCK_DIM_Y                                                     1024
        MAX_BLOCK_DIM_Z                                                     64
        MAX_GRID_DIM_X                                                      2147483647
        MAX_GRID_DIM_Y                                                      65535
        MAX_GRID_DIM_Z                                                      65535
        MAX_SHARED_MEMORY_PER_BLOCK                                         49152
        TOTAL_CONSTANT_MEMORY                                               65536
        WARP_SIZE                                                           32
        MAX_PITCH                                                           2147483647
        MAX_REGISTERS_PER_BLOCK                                             65536
        CLOCK_RATE                                                          1837000
        TEXTURE_ALIGNMENT                                                   512
        GPU_OVERLAP                                                         1
        MULTIPROCESSOR_COUNT                                                28
        KERNEL_EXEC_TIMEOUT                                                 1
        INTEGRATED                                                          0
        CAN_MAP_HOST_MEMORY                                                 1
        COMPUTE_MODE                                                        0
        MAXIMUM_TEXTURE1D_WIDTH                                             131072
        MAXIMUM_TEXTURE2D_WIDTH                                             131072
        MAXIMUM_TEXTURE2D_HEIGHT                                            65536
        MAXIMUM_TEXTURE3D_WIDTH                                             16384
        MAXIMUM_TEXTURE3D_HEIGHT                                            16384
        MAXIMUM_TEXTURE3D_DEPTH                                             16384
        MAXIMUM_TEXTURE2D_LAYERED_WIDTH                                     32768
        MAXIMUM_TEXTURE2D_LAYERED_HEIGHT                                    32768
        MAXIMUM_TEXTURE2D_LAYERED_LAYERS                                    2048
        SURFACE_ALIGNMENT                                                   512
        CONCURRENT_KERNELS                                                  1
        ECC_ENABLED                                                         0
        PCI_BUS_ID                                                          105
        PCI_DEVICE_ID                                                       0
        TCC_DRIVER                                                          0
        MEMORY_CLOCK_RATE                                                   7501000
        GLOBAL_MEMORY_BUS_WIDTH                                             192
        L2_CACHE_SIZE                                                       2359296
        MAX_THREADS_PER_MULTIPROCESSOR                                      1536
        ASYNC_ENGINE_COUNT                                                  1
        UNIFIED_ADDRESSING                                                  1
        MAXIMUM_TEXTURE1D_LAYERED_WIDTH                                     32768
        MAXIMUM_TEXTURE1D_LAYERED_LAYERS                                    2048
        CAN_TEX2D_GATHER                                                    1
        MAXIMUM_TEXTURE2D_GATHER_WIDTH                                      32768
        MAXIMUM_TEXTURE2D_GATHER_HEIGHT                                     32768
        MAXIMUM_TEXTURE3D_WIDTH_ALTERNATE                                   8192
        MAXIMUM_TEXTURE3D_HEIGHT_ALTERNATE                                  8192
        MAXIMUM_TEXTURE3D_DEPTH_ALTERNATE                                   32768
        PCI_DOMAIN_ID                                                       0
        TEXTURE_PITCH_ALIGNMENT                                             32
        MAXIMUM_TEXTURECUBEMAP_WIDTH                                        32768
        MAXIMUM_TEXTURECUBEMAP_LAYERED_WIDTH                                32768
        MAXIMUM_TEXTURECUBEMAP_LAYERED_LAYERS                               2046
        MAXIMUM_SURFACE1D_WIDTH                                             32768
        MAXIMUM_SURFACE2D_WIDTH                                             131072
        MAXIMUM_SURFACE2D_HEIGHT                                            65536
        MAXIMUM_SURFACE3D_WIDTH                                             16384
        MAXIMUM_SURFACE3D_HEIGHT                                            16384
        MAXIMUM_SURFACE3D_DEPTH                                             16384
        MAXIMUM_SURFACE1D_LAYERED_WIDTH                                     32768
        MAXIMUM_SURFACE1D_LAYERED_LAYERS                                    2048
        MAXIMUM_SURFACE2D_LAYERED_WIDTH                                     32768
        MAXIMUM_SURFACE2D_LAYERED_HEIGHT                                    32768
        MAXIMUM_SURFACE2D_LAYERED_LAYERS                                    2048
        MAXIMUM_SURFACECUBEMAP_WIDTH                                        32768
        MAXIMUM_SURFACECUBEMAP_LAYERED_WIDTH                                32768
        MAXIMUM_SURFACECUBEMAP_LAYERED_LAYERS                               2046
        MAXIMUM_TEXTURE1D_LINEAR_WIDTH                                      268435456
        MAXIMUM_TEXTURE2D_LINEAR_WIDTH                                      131072
        MAXIMUM_TEXTURE2D_LINEAR_HEIGHT                                     65000
        MAXIMUM_TEXTURE2D_LINEAR_PITCH                                      2097120
        MAXIMUM_TEXTURE2D_MIPMAPPED_WIDTH                                   32768
        MAXIMUM_TEXTURE2D_MIPMAPPED_HEIGHT                                  32768
        MAXIMUM_TEXTURE1D_MIPMAPPED_WIDTH                                   32768
        STREAM_PRIORITIES_SUPPORTED                                         1
        GLOBAL_L1_CACHE_SUPPORTED                                           1
        LOCAL_L1_CACHE_SUPPORTED                                            1
        MAX_SHARED_MEMORY_PER_MULTIPROCESSOR                                102400
        MAX_REGISTERS_PER_MULTIPROCESSOR                                    65536
        MANAGED_MEMORY                                                      1
        MULTI_GPU_BOARD                                                     0
        MULTI_GPU_BOARD_GROUP_ID                                            0
        HOST_NATIVE_ATOMIC_SUPPORTED                                        0
        SINGLE_TO_DOUBLE_PRECISION_PERF_RATIO                               32
        PAGEABLE_MEMORY_ACCESS                                              0
        CONCURRENT_MANAGED_ACCESS                                           0
        COMPUTE_PREEMPTION_SUPPORTED                                        1
        CAN_USE_HOST_POINTER_FOR_REGISTERED_MEM                             0
        CAN_USE_STREAM_MEM_OPS                                              0
        CAN_USE_64_BIT_STREAM_MEM_OPS                                       0
        CAN_USE_STREAM_WAIT_VALUE_NOR                                       0
        COOPERATIVE_LAUNCH                                                  1
        COOPERATIVE_MULTI_DEVICE_LAUNCH                                     0
        MAX_SHARED_MEMORY_PER_BLOCK_OPTIN                                   101376
        CAN_FLUSH_REMOTE_WRITES                                             0
        HOST_REGISTER_SUPPORTED                                             1
        PAGEABLE_MEMORY_ACCESS_USES_HOST_PAGE_TABLES                        0
        DIRECT_MANAGED_MEM_ACCESS_FROM_HOST                                 0
        VIRTUAL_ADDRESS_MANAGEMENT_SUPPORTED                                1
        HANDLE_TYPE_POSIX_FILE_DESCRIPTOR_SUPPORTED                         0
        HANDLE_TYPE_WIN32_HANDLE_SUPPORTED                                  1
        HANDLE_TYPE_WIN32_KMT_HANDLE_SUPPORTED                              1
        MAX_BLOCKS_PER_MULTIPROCESSOR                                       16
        GENERIC_COMPRESSION_SUPPORTED                                       1
        MAX_PERSISTING_L2_CACHE_SIZE                                        1769472
        MAX_ACCESS_POLICY_WINDOW_SIZE                                       134213632
        GPU_DIRECT_RDMA_WITH_CUDA_VMM_SUPPORTED                             0
        RESERVED_SHARED_MEMORY_PER_BLOCK                                    1024
        SPARSE_CUDA_ARRAY_SUPPORTED                                         1
        MEMORY_POOLS_SUPPORTED                                              1
        GPU_DIRECT_RDMA_SUPPORTED                                           0
        GPU_DIRECT_RDMA_FLUSH_WRITES_OPTIONS                                0
        GPU_DIRECT_RDMA_WRITES_ORDERING                                     0
        MEMPOOL_SUPPORTED_HANDLE_TYPES                                      0
        DISPLAY_NAME                                                        NVIDIA GeForce RTX 3060
        COMPUTE_CAPABILITY_MAJOR                                            8
        COMPUTE_CAPABILITY_MINOR                                            6
        TOTAL_MEMORY                                                        12884901888
        RAM_TYPE                                                            17
        RAM_LOCATION                                                        1
        GPU_PCI_DEVICE_ID                                                   620957918
        GPU_PCI_SUB_SYSTEM_ID                                               354554078
        GPU_PCI_REVISION_ID                                                 161
        GPU_PCI_EXT_DEVICE_ID                                               9475
        GPU_PCI_EXT_GEN                                                     2
        GPU_PCI_EXT_GPU_GEN                                                 3
        GPU_PCI_EXT_GPU_LINK_RATE                                           8000
        GPU_PCI_EXT_GPU_LINK_WIDTH                                          16
        GPU_PCI_EXT_DOWNSTREAM_LINK_RATE                                    8000
        GPU_PCI_EXT_DOWNSTREAM_LINK_WIDTH                                   16
OpenCL
    Platform
        Profile                                                             FULL_PROFILE
        Version                                                             OpenCL 3.0 CUDA 11.4.94
        Name                                                                NVIDIA CUDA
        Vendor                                                              NVIDIA Corporation
        Extensions                                                          cl_khr_global_int32_base_atomics cl_khr_global_int32_extended_atomics cl_khr_local_int32_base_atomics cl_khr_local_int32_extended_atomics cl_khr_fp64 cl_khr_3d_image_writes cl_khr_byte_addressable_store cl_khr_icd cl_khr_gl_sharing cl_nv_compiler_options cl_nv_device_attribute_query cl_nv_pragma_unroll cl_nv_d3d10_sharing cl_khr_d3d10_sharing cl_nv_d3d11_sharing cl_nv_copy_opts cl_nv_create_buffer cl_khr_int64_base_atomics cl_khr_int64_extended_atomics cl_khr_device_uuid cl_khr_pci_bus_info
        Device
            CL_DEVICE_ADDRESS_BITS                                          64
            CL_DEVICE_AVAILABLE                                             True
            CL_DEVICE_COMPILER_AVAILABLE                                    True
            CL_DEVICE_DOUBLE_FP_CONFIG
                CL_FP_DENORM                                                True
                CL_FP_INF_NAN                                               True
                CL_FP_DENORM                                                True
                CL_FP_ROUND_TO_NEAREST                                      True
                CL_FP_ROUND_TO_ZERO                                         True
                CL_FP_FMA                                                   True
            CL_DEVICE_ENDIAN_LITTLE                                         True
            CL_DEVICE_ERROR_CORRECTION_SUPPORT                              False
            CL_DEVICE_EXECUTION_CAPABILITIES
                CL_EXEC_KERNEL                                              True
                CL_EXEC_NATIVE_KERNEL                                       False
            CL_DEVICE_EXTENSIONS                                            cl_khr_global_int32_base_atomics cl_khr_global_int32_extended_atomics cl_khr_local_int32_base_atomics cl_khr_local_int32_extended_atomics cl_khr_fp64 cl_khr_3d_image_writes cl_khr_byte_addressable_store cl_khr_icd cl_khr_gl_sharing cl_nv_compiler_options cl_nv_device_attribute_query cl_nv_pragma_unroll cl_nv_d3d10_sharing cl_khr_d3d10_sharing cl_nv_d3d11_sharing cl_nv_copy_opts cl_nv_create_buffer cl_khr_int64_base_atomics cl_khr_int64_extended_atomics cl_khr_device_uuid cl_khr_pci_bus_info
            CL_DEVICE_GLOBAL_MEM_CACHE_SIZE                                 802816
            CL_DEVICE_GLOBAL_MEM_CACHE_TYPE                                 RW
            CL_DEVICE_GLOBAL_MEM_CACHELINE_SIZE                             128
            CL_DEVICE_GLOBAL_MEM_SIZE                                       12884901888
            CL_DEVICE_HALF_FP_CONFIG                                        Information not available
            CL_DEVICE_HOST_UNIFIED_MEMORY                                   False
            CL_DEVICE_IMAGE_SUPPORT                                         True
            CL_DEVICE_IMAGE2D_MAX_HEIGHT                                    32768
            CL_DEVICE_IMAGE2D_MAX_WIDTH                                     32768
            CL_DEVICE_IMAGE3D_MAX_DEPTH                                     16384
            CL_DEVICE_IMAGE3D_MAX_HEIGHT                                    16384
            CL_DEVICE_IMAGE3D_MAX_WIDTH                                     16384
            CL_DEVICE_LOCAL_MEM_SIZE                                        49152
            CL_DEVICE_LOCAL_MEM_TYPE                                        Local
            CL_DEVICE_MAX_CLOCK_FREQUENCY                                   1837
            CL_DEVICE_MAX_COMPUTE_UNITS                                     28
            CL_DEVICE_MAX_CONSTANT_ARGS                                     9
            CL_DEVICE_MAX_CONSTANT_BUFFER_SIZE                              65536
            CL_DEVICE_MAX_MEM_ALLOC_SIZE                                    3221225472
            CL_DEVICE_MAX_PARAMETER_SIZE                                    4352
            CL_DEVICE_MAX_READ_IMAGE_ARGS                                   256
            CL_DEVICE_MAX_SAMPLERS                                          32
            CL_DEVICE_MAX_WORK_GROUP_SIZE                                   1024
            CL_DEVICE_MAX_WORK_ITEM_DIMENSIONS                              3
            CL_DEVICE_MAX_WORK_ITEM_SIZES
                0                                                           1024
                1                                                           1024
                2                                                           64
            CL_DEVICE_MAX_WRITE_IMAGE_ARGS                                  32
            CL_DEVICE_MEM_BASE_ADDR_ALIGN                                   4096
            CL_DEVICE_MIN_DATA_TYPE_ALIGN_SIZE                              128
            CL_DEVICE_NAME                                                  NVIDIA GeForce RTX 3060
            CL_DEVICE_NATIVE_VECTOR_WIDTH_CHAR                              1
            CL_DEVICE_NATIVE_VECTOR_WIDTH_SHORT                             1
            CL_DEVICE_NATIVE_VECTOR_WIDTH_INT                               1
            CL_DEVICE_NATIVE_VECTOR_WIDTH_LONG                              1
            CL_DEVICE_NATIVE_VECTOR_WIDTH_FLOAT                             1
            CL_DEVICE_NATIVE_VECTOR_WIDTH_DOUBLE                            1
            CL_DEVICE_NATIVE_VECTOR_WIDTH_HALF                              0
            CL_DEVICE_OPENCL_C_VERSION                                      OpenCL C 1.2 
            CL_DEVICE_PREFERRED_VECTOR_WIDTH_CHAR                           1
            CL_DEVICE_PREFERRED_VECTOR_WIDTH_SHORT                          1
            CL_DEVICE_PREFERRED_VECTOR_WIDTH_INT                            1
            CL_DEVICE_PREFERRED_VECTOR_WIDTH_LONG                           1
            CL_DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT                          1
            CL_DEVICE_PREFERRED_VECTOR_WIDTH_DOUBLE                         1
            CL_DEVICE_PREFERRED_VECTOR_WIDTH_HALF                           0
            CL_DEVICE_PROFILE                                               FULL_PROFILE
            CL_DEVICE_PROFILING_TIMER_RESOLUTION                            1000
            CL_DEVICE_QUEUE_PROPERTIES
                CL_QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE                      True
                CL_QUEUE_PROFILING_ENABLE                                   True
            CL_DEVICE_SINGLE_FP_CONFIG
                CL_FP_DENORM                                                True
                CL_FP_INF_NAN                                               True
                CL_FP_DENORM                                                True
                CL_FP_ROUND_TO_NEAREST                                      True
                CL_FP_ROUND_TO_ZERO                                         True
                CL_FP_FMA                                                   True
            CL_DEVICE_TYPE
                CL_DEVICE_TYPE_DEFAULT                                      False
                CL_DEVICE_TYPE_CPU                                          False
                CL_DEVICE_TYPE_GPU                                          True
                CL_DEVICE_TYPE_ACCELERATOR                                  False
            CL_DEVICE_VENDOR                                                NVIDIA Corporation
            CL_DEVICE_VENDOR_ID                                             4318
            CL_DEVICE_VERSION                                               OpenCL 3.0 CUDA
            CL_DRIVER_VERSION                                               471.41
            Profile                                                         FULL_PROFILE
            Version                                                         OpenCL 3.0 CUDA 11.4.94
            Name                                                            NVIDIA CUDA
            Vendor                                                          NVIDIA Corporation
            Extensions                                                      cl_khr_global_int32_base_atomics cl_khr_global_int32_extended_atomics cl_khr_local_int32_base_atomics cl_khr_local_int32_extended_atomics cl_khr_fp64 cl_khr_3d_image_writes cl_khr_byte_addressable_store cl_khr_icd cl_khr_gl_sharing cl_nv_compiler_options cl_nv_device_attribute_query cl_nv_pragma_unroll cl_nv_d3d10_sharing cl_khr_d3d10_sharing cl_nv_d3d11_sharing cl_nv_copy_opts cl_nv_create_buffer cl_khr_int64_base_atomics cl_khr_int64_extended_atomics cl_khr_device_uuid cl_khr_pci_bus_info
```

---

### Post #68 — @Ovidiu78 (2021-09-01)

Gordon you are very close, you still need to do some things before you reach that step. I will make a tutorial on a private link and share it for few hours here.  
But well done Gordon again.

---

### Post #69 — @demusss (2021-09-01)

Nbminer v39.2 just been released.

Says \* `fix` : `ergo` more robust protocol handle.

Have to give this a go

---

### Post #70 — @siluro (2021-09-01)

Nice… about time will you post results here

---

### Post #71 — @demusss (2021-09-01)

I just asked nbminer dev. They say lhr fix for ergo not in this release, hopefully in next one

---

### Post #72 — @tarnwyn (2021-09-01)

Keen to learn more also

---

### Post #73 — @fkanker (2021-09-01)

Same step than Gordon here, stuck at the same place for now. I don’t know if I would go to the end, but if you write a tutorial I would be happy to read it.

---

### Post #74 — @Be-Mining (2021-09-01)

Also looking for a way to get the full potential of my 3060ti.  
The 3070 is a good old v1 not LHR. Wish I could have bought more…  
Here are my settings in case this can help someone and until [@Ovidiu78](/u/ovidiu78) releases his little how to. Question, your trick works on windows of linux only ? or both ?

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/85dc824d86d09f9b397a647e5036dd254906ba18_2_690x156.png)

image1527×346 86 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/85dc824d86d09f9b397a647e5036dd254906ba18.png "image")

---

### Post #75 — @Vmase (2021-09-01)

I assume you can setup the GPUs on windows and then just use it on both windows and linux

---

### Post #76 — @Be-Mining (2021-09-01)

I would assume the same. Just asking as I would then need to build a windows system to perform that.  
Really curious about that path.

---

### Post #77 — @siluro (2021-09-01)

Also waiting in anticipation. It will be a game changer.

---

### Post #78 — @llamafarmer (2021-09-01)

I’m calling it now, Ovidiu is trolling. I’ll turn my rig off for a day if I’m wrong ![:rofl:](https://emoji.discourse-cdn.com/twitter/rofl.png?v=10 ":rofl:")

---

### Post #79 — @gordon (2021-09-02)

I fear the same, unfortunately.

No problem, then I’ll send the 3060 LHR back and get the 3060TI LHR for it.

---

### Post #80 — @Marchettiemma1 (2021-09-02)

hello friend, which driver do you use? and what operating system? Thank you

---

### Post #81 — @JGonzi (2021-09-05)

Here you can have a solution:

[Medium – 4 Sep 21](https://medium.com/@jgonzi/lhr-waves-in-ergo-get-25-extra-6394704877cb "09:11PM - 04 September 2021")

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/9610e2bcfb8571570cf92aec5571912e054e7071.jpeg)

### [LHR Waves in ERGO? Get +25% Extra](https://medium.com/@jgonzi/lhr-waves-in-ergo-get-25-extra-6394704877cb)

We found some of the 3060/3060ti/3070 makes Waves in ERGO, some not and some yes. Why is not yet founded. So they don’t have a fix mining……

Reading time: 1 min read

We found some of the 3060/3060ti/3070 makes Waves in ERGO, some not and some yes. Why is not yet founded. So they don’t have a fix mining… We are not talking about the Up and Down for the Dataset.

We found that the result of this cards is around 85-90Mhs.

There is a configuration that will increase that Mhs in around 25% with lolMiner:

For the 3060 is:

Core 1185

Memory 1700

PL 150

That will give 101Mhs in lolMiner. For that LHR Card the best miner is lolMiner. We will show a comparative now

For the 3060TI/3070:

Core 750

Memory 1700

PL 150

That config will give 113Mhs with lolMiner nearly 4% extra than Nanominer with 108 Mhs

![IMG_20210904_230005_722](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/6326a3da0bc8a4387960f4117da2580bfb111dcd.jpeg)

That will give 108 Mhs in Nanominer  

[![IMG_20210904_225912_583](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/7ba49fc6be45e80c94854bc4ef297600d1bcbce7_2_586x500.jpeg)

IMG\_20210904\_225912\_583801×683 204 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/7ba49fc6be45e80c94854bc4ef297600d1bcbce7.jpeg "IMG_20210904_225912_583")

---

### Post #82 — @Lachemou (2021-09-05)

No news for THR parameter?

---

### Post #83 — @kokMiner (2021-09-05)

You’re wrong.  
Config for T-Rex Miner: 122-131 Mh/s  
Core: -900/-950  
Memory: 1970/2000  
PL: 120  

[![Screenshot_35](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/e3ff2ddc6c12c141592e0efaa679af28e40f52b6_2_689x299.png)

Screenshot\_351206×524 94 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e3ff2ddc6c12c141592e0efaa679af28e40f52b6.png "Screenshot_35")

---

### Post #84 — @rBatista (2021-09-06)

I’m doing 129 mh/z with NBMiner, with the following settings:  
RTX 3070: -600 / 1900 / 106.  
The biggest problem for boys who mine today is not the limitation of the LHR, but the laziness to look for more effective solutions investing their time.

---

### Post #85 — @frukzz (2021-09-07)

I didnt get further than this. [@Ovidiu78](/u/ovidiu78) master troll or master software engineer?

---

### Post #86 — @frukzz (2021-09-07)

Nice story bro.  
I have 10 MSI ventus that easily do 130+ and two GB Eagle that are just not possible to get over 95Mhs.  
Tried ALL different settings. Looks like I should send them to you instead of returning them.

---

### Post #87 — @SinnFeinDuke (2021-09-08)

try core +0, mem + 1000 , PL 65% , 63%

---

### Post #88 — @kpolfi (2021-09-08)

Same here, on new MSI Gaming Z Trio, rises to 95MH/s then drops to 85MH/s, no matter what settings. Really strange since 3070 ti LHR mines nicely over 170MH/s

---

### Post #89 — @siluro (2021-09-08)

Okay so after some playing around…long hours I was able to get my 3060TI Eagle OC Gigabyte card (LHR) up to 137.2 MH/s.  
NB Miner on HiveOS. I noticed a 1 watt difference between NB miner and HiveOS. So you need to set your power on HiveOs to 121 to lock NB miner at 120. Make sure its the latest Nvidia driver on HiveOS. (Beta driver)

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/0069fa901f0b81600a5f33fbdbcca2c3282bc713_2_690x85.png)

image1252×156 12.5 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/0069fa901f0b81600a5f33fbdbcca2c3282bc713.png "image")

  
You can now decrease your clock slowly till you find your sweet spot  
Also you need to wait for the miner to settle let it find at least 5 shares before you make further changes.  
Hope it helps I will experiment some more

---

### Post #90 — @Lachemou (2021-09-08)

Do you use 470.63.01 driver ?  
i’m stuck at 129Mh/s with a zotac twi edge 3060 ti OC LHR

---

### Post #91 — @siluro (2021-09-08)

N 470.63.01 yip. Does yours have Samsung mem?

---

### Post #92 — @Lachemou (2021-09-08)

Nop I have hynix, with new driver it seem to be better, let me some time to opti ![:wink:](https://emoji.discourse-cdn.com/twitter/wink.png?v=10 ":wink:")

---

### Post #93 — @dimarider (2021-09-10)

Use these settings for your cards and use t-rex miner the latest one.

Core 990, mem 2600, power 130, fans 90% temp limit 48.

Let me know how that works

---

### Post #94 — @adanorthpool (2021-09-10)

Gah no wayback machine to see if you posted a link or not ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")

---

### Post #95 — @JGonzi (2021-09-11)

Not bad… lot more Memory and 23W for  
113Mhs / 98W = 1.15Mhs x Watt (could be more with your memory)  
131 Mhs / 120W= 1.09 Mhs x Watt

Also considering that T-Rex inflates Hash and give less in Average at pool … in terms of effiency lot better my solution ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")

But nice to see you with the 130Mhs. I’m able to with another config at only 110W and real hash

---

### Post #96 — @siluro (2021-09-11)

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/e438455404d1ba4986388abdb3b67b554518f837_2_690x65.png)

image1278×121 12.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e438455404d1ba4986388abdb3b67b554518f837.png "image")

  
136 at 104 w. Stable 2 days running

---

### Post #97 — @lourenco (2021-09-12)

-I have an EVGA GeForce RTX 3060 Ti FTW3 LHR and I can’t get 80mh.

-On the rvn it works quite well. I have a friend of mine who also bought the same board and he has the same problem

---

### Post #98 — @chris (2021-09-13)

Me too, I still tuning not stable

Sometimes it drops to 80-90 MH/s and core rise up to 1100+

My current setting 132 MH/s core/mem 864/8000 power 107W nbminer39.2 470.11

---

### Post #99 — @Lachemou (2021-09-13)

Have you try the new lolminer 1.32?  
semi unlock with *–mode LHR2* parameter !  
I try with my 3070ti and 3060ti but same hashrate as 1.31 version …

---

### Post #100 — @connectedlv (2021-09-13)

GAINWARD GeForce RTX 3060Ti Ghost 8GB LHR, stock bios.  

[![ergo3060](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/15b8b349175db6e67db7ece7acc3219e7ec0f665_2_690x28.jpeg)

ergo30601829×75 18 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/15b8b349175db6e67db7ece7acc3219e7ec0f665.jpeg "ergo3060")

---

### Post #101 — @arysps74 (2021-09-14)

[![Screenshot 2021-09-14 at 13-08-15 RIG 1 autolykos2 542 3MH s; randomx 1 196kH s - arysps74 farm](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/d71af4dc3ea649b448a890e91b311350dd6d90e2.png)

Screenshot 2021-09-14 at 13-08-15 RIG 1 autolykos2 542 3MH s; randomx 1 196kH s - arysps74 farm939×148 16.7 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/d71af4dc3ea649b448a890e91b311350dd6d90e2.png "Screenshot 2021-09-14 at 13-08-15 RIG 1 autolykos2 542 3MH s; randomx 1 196kH s - arysps74 farm")

  
ERGO - herominer - t-rex  
GPU0 - Gainward RTX 3060 Ti Ghost LHR  
GPU1 - Galax RTX 3060 Ti 1 Click OC LHR  
GPU2 - Zotac RTX 3060 Ti Twin Edge OC LHR  
GPU3 - MSI RTX 3060 Ti Gaming X LHR

---

### Post #102 — @Vmase (2021-09-14)

MSI RTX 3060 Ti Gaming X LHR stable on that 2700 memory clock?

---

### Post #103 — @arysps74 (2021-09-14)

HiveOS MSI RTX 3060 Ti Gaming X LHR stable on PL 120 CC 140 MC 2700 (if u used Windows 1650)

---

### Post #104 — @Thierry911 (2021-09-14)

I have the same card can t even get to +950. it keeps crashing.

---

### Post #105 — @leeoolii (2021-09-15)

My 3060ti is ASUS Dual GeForce RTX 3060 Ti 8GB:

![](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/af72d0217f5f5064b1c1ce07ccb6dcefb1be4735.png)
[ASUS Global](https://www.asus.com/Motherboards-Components/Graphics-Cards/Dual/DUAL-RTX3060TI-O8G/)

### [ASUS Dual GeForce RTX 3060 Ti OC Edition 8GB GDDR6 | Graphics Card | ASUS Global](https://www.asus.com/Motherboards-Components/Graphics-Cards/Dual/DUAL-RTX3060TI-O8G/)

Leveraging advanced cooling technologies derived from flagship graphics cards, the ASUS Dual series delivers the latest gaming experience in its purest form - the perfect choice for a well-balanced build.

With the proper OC I can get around 136-137 MH/s stably

[![Screen Shot 2021-09-15 at 3.28.46 PM](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/259d34fadf85fd8f8fd906d3400e1911471adea8_2_690x410.jpeg)

Screen Shot 2021-09-15 at 3.28.46 PM1920×1141 160 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/259d34fadf85fd8f8fd906d3400e1911471adea8.jpeg "Screen Shot 2021-09-15 at 3.28.46 PM")

---

### Post #106 — @Lachemou (2021-09-15)

Stable with 23 shares… ![:man_facepalming:t3:](https://emoji.discourse-cdn.com/twitter/man_facepalming/3.png?v=10 ":man_facepalming:t3:")

---

### Post #107 — @frukzz (2021-09-15)

You’re a god thanks ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:") ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")

---

### Post #108 — @Jumpink (2021-09-16)

This is strange. I was looking to improve the rate for my Hynix card better than 120mh I adjusted it to -200/2500/120 and my one Samsung and the Hynix dropped to low 80s. I changed the Hynix it back to -900/2000/120 just like both Samsungs were set. The Hynix card returned to 120mh but the Samsung stayed in the 80s. I hadn’t changed the Samsung but it adjusted and now nothing I do will bring it back to 130+ that it has been at for days. Any ideas?  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/05477a78383e529985ea20cd8d9ec437740dc8bb_2_690x103.png)

image1363×204 36.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/05477a78383e529985ea20cd8d9ec437740dc8bb.png "image")

---

### Post #109 — @frukzz (2021-09-16)

I also had a lot of issues combining them on one rig. I cant even get the Samsungs to boot on Minerstat, works on Hiveos.  
For now I guess its better to seperate them if you can…

---

### Post #110 — @Jumpink (2021-09-16)

The hash rate for this one Samsung is unstable. It goes up to 135 and crashes down to 78. Any ideas how I can reign this in to stabilize around 130. Not sure which variable to start changing first, Core, Mem or Power, any suggestions?  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/a6b7e3f454e7be64714ca862cf22425126ecf153_2_690x99.png)

image1353×196 36.1 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/a6b7e3f454e7be64714ca862cf22425126ecf153.png "image")

---

### Post #111 — @kokMiner (2021-09-17)

Set Core to -950. If that doesn’t help, it’s -1000. For me, depending on the card, core between -900 and -1000 works stably.

---

### Post #112 — @Lachemou (2021-09-17)

Try to test with absolute value for core like 1350 for me

---

### Post #113 — @Sepheronx (2021-09-17)

How you do absolute in hiveos?

---

### Post #114 — @Jumpink (2021-09-18)

You nailed it! I’ve been steady for over 10 hours now. Small changes fixed it. Before I would drastically change all the settings and it would stay in the 80s. I was able to dial it in by making tiny adjustments and waiting. Thanks again.  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/bb6aab770ab71c44e41b560f96672391db7b03b1_2_690x130.png)

image1394×263 38.4 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/bb6aab770ab71c44e41b560f96672391db7b03b1.png "image")

---

### Post #115 — @tlilancalqui (2021-09-18)

Personally I won’t use my 3060 ti LHR on ergo

On RVN you can get around 30mh, which works out to about $3 a day after power  
On ERG, 140mh at 100w would get you $2.80 after power (and you can’t get that on an LHR)  
You would have to get 150mh at 100w to equal the return.

I’m not a huge fan of RVN, but rather than loosing .20 - .30 cents a day per card, I’ll just mine what’s more profitable, and trade.

The regular 3060s are much closer to the non LHR, I can get 118 which with the lower power and less heat is worth it to me.

[![3060LHR](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/ab7e19e5a5c2d2a1e80607b278e0418b14a0677a_2_690x303.png)

3060LHR1402×616 131 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/ab7e19e5a5c2d2a1e80607b278e0418b14a0677a.png "3060LHR")

---

### Post #116 — @Kevin (2021-09-19)

Different with HYRIX and Samsung , one is 1350MHZ and 900-1100 , SAMSUNG ,need near by 900MHZ , - core or ,lower power.

---

### Post #117 — @wishxy (2021-09-19)

Any results on Palit RTX 3060 ti?

---

### Post #118 — @bachi83 (2021-09-20)

[![Opera Momentaufnahme_2021-09-20_063633_the.hiveos.farm](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/75fa1ef1581d0a3bce1802fab95e8521bc334b43_2_690x148.png)

Opera Momentaufnahme\_2021-09-20\_063633\_the.hiveos.farm2526×542 96.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/75fa1ef1581d0a3bce1802fab95e8521bc334b43.png "Opera Momentaufnahme_2021-09-20_063633_the.hiveos.farm")

---

### Post #119 — @kokMiner (2021-09-20)

You have very high memory clocks. Want to kill those GPUs quickly?

---

### Post #120 — @Gorim (2021-09-22)

Does anybody try 2minners?

I have about 520mh on 4x3060 ti lhr, (2paliits and 2 TUF) . Whattomine said that I should mine about 0.78 ergo per day, but for yesterday I had 0,52 ergo. Does anybody have same problem?

---

### Post #121 — @siluro (2021-09-22)

LHR cards … driving me bonkers. If you leave the fan on auto speed then when the cards get hot the hashrate drops because of increase in fan power. If you set the card to manual fan speed and it just get a bit hotter in the day then hash rate also drops.  
. Mine runs at 135,8 then just drops to 82 when it climbs 2 degrees.  
Suggestion is tune your cards when your room has reached its max temp  
So I tuned it midday then when it gets cooler it climbs to 137 and holds there.

---

### Post #122 — @NOOBMINER (2021-09-22)

Hi , ive got the Palit 3060 TI LHR , clock 0 , mclock +995 , PSU 54% , FAN 70% , 107w 1.25mh/w @ 132mh/s

---

### Post #123 — @Gorim (2021-09-22)

I have about 95mh\s with this setup. 2minners, trex

---

### Post #124 — @Gorim (2021-09-23)

Is there anybody who has the same estimated raward as it is in whattomine?

---

### Post #125 — @BigV (2021-09-26)

I recently read what seemed at first to be a crazy suggestion, but after trying it, I was rather surprised at the result. Firstly, make sure a 3060 Ti is in the x16 slot with a monitor attached. Download and run a small game (full screen) which has minimal impact on the GPU itself. I used a small Tower defense game from the MS app store. While the game is running, start your miner. (I’m using NBminer). My LHR card gets me within 95% of a non-LHR card. Worked on my non-Ti 3060 as well - 109Mh vs expected 115. Ti card gives me 160 Mh…

---

### Post #126 — @sfkozt (2021-09-26)

After making these wonderful oc settings, my mh values increased.  
Thank you very much for your sharing  
The inno3d 3060ti gives 132.9 mh fixed mh, but the MSI branded 3060ti starts with 132 and then goes back and forth between 125-128, do you have any idea about it?

---

### Post #127 — @NOOBMINER (2021-09-27)

seen ive posted alerady

---

### Post #128 — @NOOBMINER (2021-09-27)

It will go up and down , thats normal , during the day you will see it goes higher than 132 and sometimes lower

---

### Post #129 — @NOOBMINER (2021-09-27)

Gorim , checkout for your specific card online , try miningchamber and then adjust slowly

---

### Post #130 — @MoGunz (2021-09-29)

I have the same exact card along with the Zotac 3060ti Amp White Edition. Both are LHR of course. They both react the same upon beefing up my OC settings. They somehow crash and reset back to default value no matter the saved profile you have on MSI Afterburner.

Try the following OC settings, hopefully they might help:  
PL: 54 (Twin Edge OC), 50 (AMP White)  
CC: -100  
MC: 900-1000 (usually they crash at 1000 or higher)  
Fan: 80%  
Temp: 50-55 celsius  
MH/s: 134 expected @109W (Twin Edge OC) , 134 @119W (AMP White)

Good luck ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=10 ":slight_smile:")

---

### Post #131 — @tarnwyn (2021-09-29)

Was stuck on 116.5 MH/s with my PNY 3060ti LHR

Recently tried NBminer 39.5 with ergo unlock feature and saw marked improvmenet:

seetings below

[![3060ti unlock](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/194e083d426c29d2e17bcd3b82243ac9445af8bd_2_690x34.jpeg)

3060ti unlock2786×138 27.9 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/194e083d426c29d2e17bcd3b82243ac9445af8bd.jpeg "3060ti unlock")

---

### Post #132 — @Lachemou (2021-09-30)

Nice, can you share your lhr parameter for nbminer please?

---

### Post #133 — @tarnwyn (2021-09-30)

Sure, was -lhr 85

Tho when inputing into miner config for nbminer must use parentheses like other arguments

So its:

“-lhr”: “85”

Something like that, check suggestion on the info button to be sure.

---

### Post #134 — @Lachemou (2021-09-30)

Thank you, it didn’t work with mine, it’s probably an hynnix issue wih my card…

---

### Post #135 — @tarnwyn (2021-09-30)

Ah yeh that sucks. I think it says in the release notes for the build that it does not work well with hynix memory.

---

### Post #136 — @Boomer (2021-10-05)

Thanks for this!

I have two 3060s and a 3060ti in the middle (all Samsung)

I added a space then this code to the end of “Miner Options”:

-lhr 99,85,99

And it works great!!

[![Screenshot_20211005_162259](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/b/b484479ec26ceda76994965c76e2f8fda1534937_2_690x175.jpeg)

Screenshot\_20211005\_1622591793×456 116 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/b/b484479ec26ceda76994965c76e2f8fda1534937.jpeg "Screenshot_20211005_162259")

---

### Post #137 — @tarnwyn (2021-10-06)

Nice one.

Good to see the devs making progress with the lhr unlock, with decent power efficiency too.

Looking forward to further developments.

---

### Post #138 — @OvidiuCro (2021-10-16)

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/a/a0a6b3294663c46d11aac7d14e49394390e0983e_2_690x82.png)

image1211×145 20 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/a/a0a6b3294663c46d11aac7d14e49394390e0983e.png "image")

  
Tryied all the settings from this page. No succes. Any idea?  
Thanks.

---

### Post #139 — @OvidiuCro (2021-10-16)

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/3/33807ae1b0ea82d49e68a1d9177efa766d330e81_2_690x81.png)

image1210×143 20 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/3/33807ae1b0ea82d49e68a1d9177efa766d330e81.png "image")

---

### Post #140 — @techspeak (2021-10-16)

I have my MSI 3060ti LHR Ventus 2 Fans  
And I got a Hashrate of 132 Mhs on ERGO with 70 PL +100 CC +1000 MC 135W

---

### Post #141 — @Baloco (2021-10-17)

Man, 3060 ti lhr XLR8 here,

Finally got some stable 131 Mh on t-rex, mine seems to kick in lhr above +1000mhz memory clock, so that’s not an option

Had to fix core clock on MSI afterburner, just setting an OC didn’t work, you can do that using curve editor, shift selecting the entire curve, drag a point and hit shifh+enter and type the fixed value, i’ve used 1020mhz

Memory: +920

PL: 62

131mh/s @ 120w

---

### Post #142 — @kokMiner (2021-10-18)

I’m back with the good news!  
I was able to fully unlock my 3060TI for ERG.  
Before unlock:  

[![Screenshot_35](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/1X/e3ff2ddc6c12c141592e0efaa679af28e40f52b6_2_689x299.png)

Screenshot\_351206×524 94 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/1X/e3ff2ddc6c12c141592e0efaa679af28e40f52b6.png "Screenshot_35")

The current result:  

[![Screenshot_45](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/d/d6aeb8ec9c235e23204f431f18898afbe1d5e209_2_690x361.png)

Screenshot\_451022×536 81.2 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/d/d6aeb8ec9c235e23204f431f18898afbe1d5e209.png "Screenshot_45")

---

### Post #143 — @quatrero (2021-10-18)

So, How yo did it? Can you share you settings for the cards and LHR configuration?

---

### Post #144 — @TGeRi (2021-10-19)

Looking for details! Please share! I have mine on 115mhs now, this would make a huge difference for me!

---

### Post #145 — @Martin369 (2021-10-21)

Just use T-rex miner with “lhr tune” and adjust the overclocks.

---

### Post #146 — @hyperer (2021-10-26)

T-rex windows 10 latest drivers  

[![image](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/1/19087c3440027452cc14f52479f3887ebe79107b_2_432x500.jpeg)

image777×898 211 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/1/19087c3440027452cc14f52479f3887ebe79107b.jpeg "image")

---

### Post #147 — @RegulusE (2021-11-01)

I would appreciate if you could explain it a bit more. How did you unlock it so it mines 154.5?

---

### Post #148 — @kokMiner (2021-11-02)

154.5 Mhs but 140W ![:rofl:](https://emoji.discourse-cdn.com/twitter/rofl.png?v=10 ":rofl:")  
Probably at the expense of cosmically high clocks.  
In my opinion, 150Mhs at 110W and low clocks is better ![:sunglasses:](https://emoji.discourse-cdn.com/twitter/sunglasses.png?v=10 ":sunglasses:")!

---

### Post #149 — @L4STWISHES (2021-11-08)

[@kokMiner](/u/kokminer) Do You want to help somebody or just say that You are a winner?

I have never understood people that add screen from HiveOS without settings of OC or miner config…

---

### Post #150 — @RegulusE (2021-12-22)

Well, how to get 150?

---

### Post #151 — @Schrotti (2021-12-27)

I look that you have more than 80 Mh. Do you have the same Hash in ETH? because i just reached 25 and no more.

have you any idea, what should i do to get more MH?

MG RTX3060Ti (I assume LHR)

regardings  
![Screenshot 2021-12-27 120406](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/2/2c0210b05b6a3ed25b320970eae3d43af8135f27.png)

---

### Post #152 — @NOOBMINER (2022-01-27)

Hi there , you want your wattage (PL) for ergo at 110-120w , for eth at 130W , I haev a palit 3060ti LHR and running 43mh on eth and 130mh on ergo , ETH CC +100 MC +700 , ERGO CC +100 and MC +850

---

### Post #153 — @NOOBMINER (2022-01-27)

Im in windows , for hive os double your MC

---

### Post #154 — @ymnsrkn (2022-01-27)

hello, what oc settings?

---

### Post #155 — @hany.ghoneim (2022-04-24)

Hi Ovidiu78  
I am in the same step, could you please share with me the tutorial which on the private link  
Thanks

---

### Post #156 — @hany.ghoneim (2022-04-24)

Nice, which miner/driver you use ?

---

### Post #157 — @vivek (2022-11-18)

[![Screenshot (14)](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/optimized/2X/8/8fdfc88ca1793caed0058067f73abbc14c4dbcf1_2_690x387.png)

Screenshot (14)1366×768 146 KB](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/8/8fdfc88ca1793caed0058067f73abbc14c4dbcf1.png "Screenshot (14)")
