import VehicleKeyBoard from "./vehicleKeyBoard";

const Demo = () => {
  // 控制车牌组件的现实隐藏
  const [visible, setVisible] = useState<boolean>(false);
  // 当前输入车牌的值
  const [plateNo, setPlateNo] = useState<string>("");
  // 改变车牌的回调
  const changeIpt = (val: string) => {
    if (val.length === 7) {
      setVisible(false);  
    }
  };
  // 点击空白区域隐藏车牌组件
  const maskCallback = () => {
    // ...
    setVisible(!visible);
  };

  return (
    <View>
      <p>{plateNo}</p>
      <VehicleKeyBoard
        visible={visible}
        onchange={changeIpt}
        maskCallback={maskCallback}
        // 车牌组件值
        defaultVal={plateNo}
      />
    </View>
  );
};

export default Demo;
