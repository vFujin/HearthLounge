import message from 'antd/lib/message';
/**
 * Functions representing success - loading - error notifications respectively
 *
 * @param {string} msg - Message of the notification
 */
export const success = (msg) =>{
  message.success(msg);
};
export const loading = (msg) =>{
  message.loading(msg);
};
export const error = (msg, duration) =>{
  message.error(msg, duration || 4);
};
