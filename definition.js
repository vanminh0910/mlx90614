Blockly.Blocks['block_mlx90614_get_temp'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_mlx90614_get_temp",
        "message0": Blockly.Msg.MLX90614_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                Blockly.Msg.MLX90614_MESSAGE1,
                "1"
              ],
              [
                Blockly.Msg.MLX90614_MESSAGE2,
                "2"
              ],
            ]
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": "#f79532",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["block_mlx90614_get_temp"] = function (block) {
  Blockly.Python.definitions_['import_mlx90614'] = 'import mlx90614';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import I2C, Pin';
  var type = block.getFieldValue("type");
  var code = "";
  if (type == "1") {
    code = "mlx90614.MLX90614(I2C(scl=Pin(22), sda=Pin(21))).read_object_temp()";
  } else {
    code = "mlx90614.MLX90614(I2C(scl=Pin(22), sda=Pin(21))).read_ambient_temp()";
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


