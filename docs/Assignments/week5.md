# week 5: CNC manufacture
In this week, we learned about CNC manufacture and how to use CNC machines. We also learned about the different types of CNC machines and their applications.
## What is CNC?
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417091725122.png) [What is CNC Machining? A Complete Guide to Its Technology and Applications](https://machining-quote.com/zh/bolg/what-is-cnc-machining/)

CNC stands for Computer Numerical Control, which is a method of controlling mechanical movement and the machining process using digital information. CNC technology combines multiple disciplines such as computer technology, automation control technology, drive technology, and precision measurement technology, and is widely used in the manufacturing industry.

In a CNC system, operators write specific program codes to input information about the shape, dimensions, and process parameters of the part to be machined into the computer control system. Based on these instructions, the control system precisely controls the moving parts of the machine tool, such as the movement path of the cutting tool, the spindle speed, and the feed rate, to achieve automated machining of the workpiece.

Compared with traditional manual machining methods, CNC machining has many significant advantages. It can achieve a high degree of precision and repeatability, ensuring that each machined part meets strict design requirements and greatly improving the stability of product quality. At the same time, CNC machining is highly efficient, capable of quickly completing complex machining tasks, reducing the production cycle, and increasing production efficiency. Additionally, by modifying the program code, different parts can be easily machined, offering strong flexibility and adaptability.

## Practical Exercise
This practical exercise will use the MDX - 50 benchtop CNC from Roland DGA products to machine the XIAO ESP32C3 board designed and exported in Fusion 360. The specific steps are as follows:

### 1. Design Preparation
- Open the Fusion 360 software and create a new design project.
- Based on the specifications and requirements of the XIAO ESP32C3 board, create a 3D model design in Fusion 360.
- After completing the design, set the machining process parameters, such as the tool path, cutting depth, and feed rate.
- Export the designed model in a file format suitable for the MDX - 50 benchtop CNC, such as an NC code file.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417093406531.png)
### 2. Equipment Preparation
- Check the power supply, coolant, cutting tools, etc. of the MDX - 50 benchtop CNC equipment to ensure they are functioning properly.
- Install the appropriate cutting tool and adjust the length and position of the tool according to the design requirements.
- Fix the workpiece plate on the machine tool workbench, ensuring it is firmly installed and accurately positioned.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/632b551f3d34ef95b2ebc71765f0f5a.jpg)
### 3. Program Import and Debugging
- Transfer the NC code file exported from Fusion 360 to the control system of the MDX - 50 benchtop CNC via a USB interface or other data transfer methods.
- Check and debug the imported program in the control system to ensure its correctness and feasibility.
- Set the initial machining position and coordinate system of the machine tool, and perform a trial cut to check if the tool path and machining results meet the design requirements.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417084654980.png)
### 4. Machining Operation
- After confirming that all preparations are complete, start the machining program of the MDX - 50 benchtop CNC to begin machining.
- During the machining process, closely monitor the operating status and machining conditions of the machine tool. Stop the machining immediately if any abnormalities occur.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/2c407573e23dd12f8f9bdfa47eaded0.jpg)
### 5. Post - machining Processing
- After the machining is completed, turn off the power supply of the machine tool and wait for it to cool down.
- Remove the board from the workbench and clean the chips and coolant on the surface.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417095158333.png)
### 6. Soldering & Testing
- After the board is removed from the workbench, use the soldering iron to solder the components on the board.
- After the soldering is complete, connect the board to the XIAO ESP32C3 board and test the functionality of the board.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417084534264.png)   
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250417084420696.png)

