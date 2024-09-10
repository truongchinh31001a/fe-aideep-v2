import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

export default function UploadArea({ fileList, handleChange }) {
  return (
    <div className="flex justify-center mb-6">
      <Upload.Dragger
        name="files"
        multiple={true}
        accept="image/*"
        fileList={fileList}
        onChange={handleChange}
        showUploadList={false}
        beforeUpload={() => false}
        className="rounded-lg p-6 hover:border-blue-500 transition-all duration-300 w-full md:w-[545px]"
        style={{
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#29acf0',
          border: '2px dashed #29acf0',
        }}
      >
        <div>
          <p className="ant-upload-drag-icon">
            <UploadOutlined className="text-blue-400 text-3xl sm:text-4xl md:text-5xl mb-2" />
          </p>
          <p className="text-blue-400 font-medium">
            Click or drag file to this area to upload
          </p>
        </div>
      </Upload.Dragger>
    </div>
  );
}
