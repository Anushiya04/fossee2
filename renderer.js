document.addEventListener("DOMContentLoaded", async () => {
    const portSelector = document.getElementById("portSelector");
    const executeButton = document.getElementById("executeButton");
    const outputArea = document.getElementById("outputArea");
    const pythonCodeInput = document.getElementById("pythonCodeInput");

    // Populate port options
    try {
        const ports = await window.electron.listPorts();
        ports.forEach((port) => {
            const option = document.createElement("option");
            option.value = port.path; // Assuming the `port` object has a `path` property
            option.textContent = port.path;
            portSelector.appendChild(option);
        });
    } catch (error) {
        alert(`Error fetching ports: ${error.message}`);
    }

    // Execute Python code on button click
    executeButton.addEventListener("click", async () => {
        const port = portSelector.value;
        const pythonCode = pythonCodeInput.value;

        if (!port || !pythonCode) {
            alert("Please select a port and enter Python code to execute!");
            return;
        }

        try {
            const result = await window.electron.uploadCode(port, pythonCode);
            if (result.success) {
                outputArea.textContent = `Success:\n${result.output}`;
            } else {
                outputArea.textContent = `Error:\n${result.output}`;
            }
        } catch (error) {
            outputArea.textContent = `Error:\n${error.message}`;
        }
    });
});
