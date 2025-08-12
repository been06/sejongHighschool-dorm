using UnityEngine;//아직 미완성 그냥 임시 저장임
using System.Collections;
using System.Collections.Generic;
using System.IO.Ports;
using System.Drawing.Printing;// 시리얼 포트
public class NewBehaviourScript : MonoBehaviour
{
    SerialPort arduino = new SerialPort();
    // Start is called before the first frame update
    void Start()
    {
        //아두이노랑 통신환경 설정
        arduino.PortName = "COM1";// usb연결 포트
        arduino.BaudRate = 9600;//아두이노의 시리얼 비긴이랑 같은 거 해야함

        //유니티와 아두이노를 연결한다
        arduino.Open();
        if(arduino.IsOpen)
        {
            print("유니티와 아두이노를 연결함");
        }
        else
        {
            print("유니티와 아두이노 연결을 실패함");
        }
    }

    // Update is called once per frame
    void Update()
    {
        //아두이노랑 유니티가 연결될 것
        //아두이노가 보낸 데이터가 유니틔 수신버퍼에 데이터가 존재할 것
        if (arduino.IsOpen)
        {
            if(arduino.BytesToRead > 0)//아두이노의 수신 버퍼가 0보다 클때
            {//데이터 수신   
                string text = arduino.ReadLine();// \n이 있을때 까지를 읽는다
            }
        }
    }
}
