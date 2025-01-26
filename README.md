# Electron-Based Python-Arduino Controller

## Description

This project is a **desktop application** built with **Electron** that allows users to write and execute Python scripts to control an Arduino. The application includes features such as a serial port selector, a text editor for Python code, and an upload-and-execute button. The Python scripts use the **pyFirmata** library to communicate with the Arduino and control its pins (e.g., blinking an LED on pin 13).

---

## Features

- **Serial Port Selector**: Choose the serial/USB port where the Arduino is connected.
- **Python Code Editor**: Write Python scripts directly in the application.
- **Upload and Execute Button**: Send the Python script to the Arduino and execute it.
- **Real-Time Feedback**: Displays connection status and error messages (if any).
- **Refresh Button**: Reset the editor for new code entry.

---

## Technologies Used

- **Electron**: For creating the desktop application.
- **HTML, CSS, JavaScript**: For building the user interface.
- **Node.js**: For backend operations and serial communication.
- **Python**: For executing scripts that interact with the Arduino.
- **pyFirmata**: For Python-Arduino communication.
- **Arduino**: Running the StandardFirmata firmware.

---

## Prerequisites

Before running the application, ensure you have the following installed:

1. **Node.js** (latest version)
2. **Python** (version 3.7 or later)
3. **Arduino IDE** (to upload StandardFirmata firmware)

---
[image alt](https://github.com/Anushiya04/fossee2/blob/4a46d61a1ce2d52ff9be6d30659f12c29f1d0910/Electron%20app.jpg)

