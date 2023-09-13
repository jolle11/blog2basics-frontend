import { MessageInstance } from 'antd/es/message/interface';

export const useNotification = (
	messageApi: MessageInstance,
	type: string,
	description: string,
) => {
	switch (type) {
		case 'success': {
			messageApi?.success(description);
			break;
		}
		case 'error': {
			messageApi?.error(description);
			break;
		}
		default: {
			messageApi?.info(description);
			break;
		}
	}
};
