# yolobit_robotshield
Yolo:Bit extension for MLX90614

# Example code
```sh
from yolobit import *
import mlx90614
from machine import I2C, Pin
import time

while True:
  display.scroll((mlx90614.MLX90614(I2C(scl=Pin(22), sda=Pin(21))).read_ambient_temp()))
  time.sleep_ms(1000)
```