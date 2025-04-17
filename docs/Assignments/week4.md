# Week4: CAD Design
This week, I explored various CAD design techniques and tools. I completed a series of tasks that helped me better understand 3D modeling and engineering drawing fundamentals. Through hands-on experience with Fusion360 and SolidWorks, I developed skills in component design, motion simulation, and parametric modeling. I also experimented with plugins and practiced automated modeling methods. Below is a detailed breakdown of my weekly work:


## 1. Task
- **Assessment**
- Build design project and build new component  
- Design your first 3D model:  
  - Solid  
  - Create  
  - Modify  
  - Assemble  
  - Construct  
  - Inspect  
- Gif to show working condition  
- Video show how to design history  
- Simple parameter design practice  
- Test contact set/motion link and show gif  
- Try one plugin and use it in your design  
- Engineering Drawing for one component at least  
- Simple introduce another CAD software or experience  
- Practice for Automated Modeling  

---

## 2. Fusion360
### A. Assessment
  - Used **Fusion360** to create parametric 3D models  
  - Practiced assembling parts using joints  
  - Tested motion links and contact sets  
  - Exported animation gif to demonstrate working condition  
  - Applied one plugin to enhance modeling efficiency  
  - Created engineering drawing of one key component  
  - Explored Fusion360's timeline and design history features
### B. Fusion360 Modeling Steps - Mouse Example
 
 - Started by importing or sketching the **top and side profiles** of the mouse.
 ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408022100120.png)
 ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408025635374.png)
 - Added **sketch constraints and dimensions** to fully define the sketches (turned black).
 
 - Used the **Project** tool to bring important sketch elements onto other planes.
 ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408025954945.png)
 - Applied **Intersect** to extract key curves where sketches overlapped.
 ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408030604798.png)
 ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408030353220.png)
  - Created **surfaces** by using the **Loft** tool between the intersecting curves.
  ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408030917579.png)
  ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408031025852.png)
  - Applied **Mirror** to replicate the surface and form the symmetric half.
  ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408031151331.png)
  - Used the **Stitch** function to combine all surfaces into a closed solid body.
  ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408031823633.png)
  - Performed a **Symmetric Extrude Cut** along the central axis to shape the main form.
  ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408031931544.png)
  - Used **Cut** to split the body into **two separate solid parts**, representing the left and right shells of the mouse.
  ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408032539987.png)
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408033004253.png)  

---

## 3. SolidWorks

- Built a Blender Base Part model in **SolidWorks**  
- Used features like **Boss-Extrude**, **Cut-Extrude**, **Fillet**, and **Assembly Mates**  
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417112425995.png)

- Open a new Assembly file in SolidWorks.
- Insert the base and bowl parts into the assembly.
- Use the Mate tool to position the parts
- Assemble Blender Base and Bowl
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417114229711.png)
- Created engineering drawings with dimensions and views  
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417112525806.png)


---

## 4. Comparison Table: Fusion360 vs SolidWorks

| Feature                         | Fusion360                                | SolidWorks                              |
|-------------------------------|------------------------------------------|------------------------------------------|
| Platform                       | Cloud-based, multi-platform              | Desktop-based, Windows only              |
| Parametric Modeling            | Yes                                      | Yes                                      |
| Assembly and Joints            | Joint-based assembly                     | Mate-based assembly                      |
| Simulation Tools               | Built-in basic simulation                | Advanced simulation (with add-ons)       |
| Plugin Support                 | Good, App Store available                | Also supports plugins                    |
| Design History (Timeline)      | Clear timeline for edits                 | Feature tree with rollback capability    |
| File Collaboration             | Real-time cloud sharing                  | Requires external file sharing           |
| Engineering Drawing            | Available, basic annotation tools        | Strong drawing capabilities              |
| Automated Modeling             | Some support via scripts/plugins         | More developed automation tools          |
| Learning Curve                 | Easier for beginners                     | Steeper, more professional features      |

