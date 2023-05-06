import { Layout, Table, Space, Image, Progress, Modal, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./QrCodeTable.css";
import QRCode from "qrcode";
import { getAllVideosLinksForQR, deleteVideoOfQRCode, deleteVideoOfQRCodeFromDatabase, updateVideoOfQRCode, updateVideoOfQRCodeInDatabase } from "../../../services/VideoQRCodeSlice";
import { useSelector, useDispatch } from "react-redux"



const { Header, Content } = Layout;



function QrCodeTable() {



  const [urls, setUrls] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedVideoOfQRCode, setUpdatedVideoQRCode] = useState({
    key: 0,
    name: "",
    link: ""
  });




  const dispatch = useDispatch();
  const videosLists = useSelector(state => state.videoQRCodeSlice);









  const onChangeName = (event) => {
    setUpdatedVideoQRCode({ ...updatedVideoOfQRCode, name: event.target.value })
  }




  const onChangeLink = (event) => {
    setUpdatedVideoQRCode({ ...updatedVideoOfQRCode, link: event.target.value })
  }








  const showModal = () => {
    setIsModalOpen(true);
  };






  const handleCancel = () => {
    setIsModalOpen(false);
  };












  const generateQRFromVideoLinks = async () => {


    const response = await dispatch(getAllVideosLinksForQR());


    response.payload.map(videoQRCodeData => {


      QRCode.toDataURL(videoQRCodeData.link)
        .then((url) => {


          setUrls([...urls, { id: videoQRCodeData.id, url: url, link: videoQRCodeData.link }]);


        })
        .catch((err) => {


          console.error(err);


        });


    })


  }











  const updateVideoLinkAndQR = async () => {





    const response = dispatch(updateVideoOfQRCode({
      key: updatedVideoOfQRCode.key,
      name: updatedVideoOfQRCode.name,
      link: updatedVideoOfQRCode.link
    }));






    const newUrlsData = await Promise.all(


      urls.map(async urlData => {


        if (urlData.id == response.payload.key) {


          try {


            const url = await QRCode.toDataURL(response.payload.link);
            return {
              ...urlData,
              id: response.payload.key,
              url: url,
              link: response.payload.link
            };


          } catch (err) {

            console.error(err);

          }
        }


        else {
          return urlData;
        }
      })
    );



    setUrls(newUrlsData);



    dispatch(updateVideoOfQRCodeInDatabase({
      videoLinkID: updatedVideoOfQRCode.key,
      name: updatedVideoOfQRCode.name,
      link: updatedVideoOfQRCode.link
    }))




    handleCancel();




  };













  const deleteVideoLinkAndQR = async (videoOfQRCode) => {



    dispatch(deleteVideoOfQRCode({
      videoKey: videoOfQRCode.key
    }));



    dispatch(deleteVideoOfQRCodeFromDatabase({
      videoLinkID: videoOfQRCode.key
    }));



  }










  useEffect(() => {


    generateQRFromVideoLinks();



  }, [])










  const columns = [


    {
      title: "Name",
      dataIndex: "name",
    },


    {
      title: "Video Link",
      dataIndex: "link",
    },


    {


      title: "QR",
      dataIndex: "qr",
      render: () => {

        return (
          urls.map(url => <Space size="middle" key={url.id}>
            <Image width={60} src={url.url} />
          </Space>)
        )

      },


    },


    {


      title: "Action",
      dataIndex: "action",
      render: (text, record) => (


        <Space size="middle">
          <span className="edit-span" onClick={() => {
            setUpdatedVideoQRCode({ ...updatedVideoOfQRCode, key: record.key });
            showModal();

          }}>Edit</span>|
          <span className="delete-span" onClick={() => deleteVideoLinkAndQR(record)}>Delete</span>
        </Space>


      ),


    },


  ];









  return (




    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Header className="barcode-header"> Barcode List</Header>
      <Content style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        {
          videosLists.isLoader === true ?
            <Progress type="dashboard" percent={50} size={20} className='progress-animation' />
            :
            <Table
              columns={columns}
              dataSource={videosLists.data}
              bordered
              pagination={{
                pageSize: 10,
              }}
              style={{ width: '1250px', height: '400px' }}
            />
        }
      </Content>





      <Modal title="Update QR" open={isModalOpen} onOk={updateVideoLinkAndQR} onCancel={handleCancel} okText="Update"

        okButtonProps={{
          style: {
            color: "#ffffff",
            backgroundColor: "#8323ff "
          }
        }}

        closable={false}
      >



        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 18,
          }}

          autoComplete="off"

        >

          <Form.Item
            label="Name"
            name="videoName"
            rules={[
              {
                required: true,
                message: 'Please input a video name!',
              },
            ]}
            className='qr--modal-form-item'
          >
            <Input onChange={onChangeName} />
          </Form.Item>



          <Form.Item
            label="Video Link"
            name="videoLink"
            rules={[
              {
                required: true,
                message: 'Please input a video link !',
              },
            ]}
            className='qr--modal-form-item'
          >
            <Input onChange={onChangeLink} />
          </Form.Item>


        </Form>



      </Modal>


    </Layout>
  );
}

export default QrCodeTable;
