import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const UploadFile = () => {
    const props = {
        name: 'cv', // El nombre del campo que se enviará al servidor
        multiple: false, // Cambiado a false ya que generalmente solo se sube un archivo CV
        action: 'URL_DE_TU_ENDPOINT', // Reemplaza con la URL real de tu endpoint en Express
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className='mb-7 mt-2'>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                </p>
                <p className="ant-upload-text">Arrastra tu CV</p>
                <p className="ant-upload-hint">
                    Recomendable que no pase de dos hojas, trata de ser detallado en las funciones y las herramientas que hayas usado
                </p>
            </Dragger>
        </div>
    );
};

export default UploadFile;
