import message from 'antd/lib/message';

export const success = (msg) =>{
  message.success(msg);
};
export const loading = (msg) =>{
  message.loading(msg);
};
export const error = (msg) =>{
  message.error(msg);
};
