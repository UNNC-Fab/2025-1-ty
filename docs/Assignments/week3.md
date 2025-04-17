# Week 3: Electronic Design

In this class, I learned PCB-related knowledge, downloaded Autodesk Fusion 360 and JiaLiChuang EDA, and designed a PCB board. The following are the key points I covered:

## 1. Autodesk Fusion 360

### A. Download and Installation

1. **Download the Installer**  
   - Visit the official [Autodesk Fusion 360 website](https://www.autodesk.com/products/fusion-360) and click **Download Free Trial**.
   - Select your operating system (Windows/macOS) and save the installer file (approx. 700MB–1GB).

2. **Run the Installer**  
   - Double-click the downloaded file (.exe for Windows or .dmg for macOS).
   - Follow the on-screen instructions to complete the installation. It’s recommended to install on a non-system drive if possible.  
   ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318132709476.png)

3. **Launch Fusion 360**  
   - Open the software after installation and sign in with your Autodesk ID.
   -If you don’t have an Autodesk account, click **Need an Autodesk ID?** during sign-in.
   -Apply for an educational license by visiting the [Autodesk Education Portal](https://www.autodesk.com/education).
   - Provide your educational email (e.g., ending in @edu) or personal email and complete registration.
   - Once signed in, you can start designing your PCB.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408013704169.png)   

---

### B. Designing a Simple PCB in Fusion 360

 1. **Create a New Electronics Design**

     - Open Fusion 360 and navigate to **File > New Electronics Design**.
     - Name your project (e.g., “Simple_PCB”) and select **Schematic** to begin designing the circuit.

2. **Add Components from the Library**
     - Open the **Library Manager** (**Tools > Library Manager**) and ensure these libraries are loaded:
         - **Adafruit** (for Xiao ESP32-C3 and LEDs)
         - **Generic Components** (for resistors, switches, etc.)
     - Search for and place components:
         - **Xiao ESP32-C3:** Locate in the Adafruit library.
         - **Switch:** Use a generic SPST switch.
         - **Resistor:** Choose a 220Ω resistor.
         - **LED:** Select an LED.
     - Drag or double-click the components onto the schematic workspace.

3. **Connect Components in the Schematic**

     - Use the **Net Tool** to wire the components:
     - Connect the Xiao ESP32-C3’s GPIO pin to the resistor.
     - Link the resistor to the LED’s anode.
     - Connect the LED’s cathode to ground (GND).
     - Wire the switch between power (VCC) and the Xiao’s enable pin.
     - Assign power symbols by adding **+V** (5V) and **GND** to complete the circuit.  
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408015345999.png)

4. **Define PCB Shape and Switch to PCB Layout**

     - Click **Switch to PCB Document** from the schematic workspace.
     - Adjust the PCB outline:
     - Use the **Outline Tool** to draw a custom shape or resize the default rectangle.
     - Ensure the board size accommodates all components.  
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408015546824.png)

5. **Place Components on the PCB**

     - Drag components onto the PCB:
     - Position the Xiao ESP32-C3 centrally.
     - Place the switch near the board edge for easy access.
      - Arrange the resistor and LED close to the Xiao’s GPIO pin.
     - Utilize the **Rotation** and **Mirror** tools for optimal placement.

6. **Generate 3D PCB and Validate**

     - Click **Push to 3D PCB** to visualize the board in 3D.  
  ![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/tong/20250408015738342.png)
     - Check for component collisions or alignment issues.
     - Run a **Design Rule Check (DRC)** to detect errors like short circuits or insufficient spacing.

7. **Export Manufacturing Files**

     - Navigate to **File > Export** and select:
     - **Gerber Files** for PCB

