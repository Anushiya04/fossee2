import sys
from pyfirmata import Arduino

if len(sys.argv) < 3:
    print("Usage: python arduino_comm.py <port> <code>")
    sys.exit(1)

port = sys.argv[1]
python_code = sys.argv[2]

try:
    board = Arduino(port)
    exec(python_code)
    print("Code executed successfully.")
except Exception as e:
    print(f"Error: {e}")
finally:
    try:
        board.exit()
    except:
        pass
