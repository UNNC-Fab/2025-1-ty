# Week 2: Ardino Application

# Arduino application
## 1.Software
Yu can download Arduino IDE from www.arduino.cc according to your PC's version and then install by youself.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318025247146.png)
## 2.Hardware
data from（https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/）
Seeed Studio XIAO ESP32C3 is an IoT mini development board based on the Espressif ESP32-C3 WiFi/Bluetooth dual-mode chip, featuring a 32-bit RISC-V CPU that delivers powerful computing performance with its efficient architecture.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318061833614.png)

### Pinout diagram

![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318122119255.png)

| Item | Seeed Studio XIAO ESP32C3 | Seeeduino XIAO | Seeed XIAO RP2040 | Seeed XIAO nRF52840 | Seeed XIAO nRF52840 Sense |
|------|---------------------------|----------------|-------------------|--------------------|-----------------------|
| Processor | ESP32-C3 32-bit RISC-V @160MHz | SAMD21 M0+@48MHz | RP2040 Dual-core M0+@133Mhz | nRF52840 M4F@64MHz | nRF52840 M4F@64MHz |
| Wireless Connectivity | WiFi and Bluetooth 5 (BLE) | N/A | N/A | Bluetooth 5.0/BLE/NFC | Bluetooth 5.0/BLE/NFC |
| Memory | 400KB SRAM, 4MB onboard Flash | 32KB SRAM 256KB FLASH | 264KB SRAM 2MB onboard Flash | 256KB RAM, 1MB Flash 2MB onboard Flash | 256KB RAM,1MB Flash 2MB onboard Flash |
| Built-in Sensors | N/A | N/A | N/A | N/A | 6 DOF IMU (LSM6DS3TR-C), PDM Microphone |
| Interfaces | I2C/UART/SPI | I2C/UART/SPI | I2C/UART/SPI | I2C/UART/SPI | I2C/UART/SPI |
| PWM/Analog Pins | 11/4 | 11/11 | 11/4 | 11/6 | 11/6 |
| Onboard Buttons | Reset/ Boot Button | N/A | Reset/ Boot Button | Reset Button | Reset Button |
| Onboard LEDs | Charge LED | N/A | Full-color RGB/ 3-in-one LED | 3-in-one LED/ Charge LED | 3-in-one LED/ Charge LED |
| Battery Charge Chip | Built-in | N/A | N/A | BQ25101 | BQ25101 |
| Programming Languages | Arduino/ MicroPython | Arduino/ CircuitPython | Arduino/ MicroPython | Arduino/ CircuitPython | Arduino/ CircuitPython |
