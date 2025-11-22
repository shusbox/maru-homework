import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export const formatDate = (date: string): string => {
  return dayjs(date).format('YYYY년 MM월 DD일 A h:mm');
};

export const getRelativeTime = (date: string): string => {
  return dayjs(date).fromNow();
};

export const getCurrentDate = (): string => {
  return new Date().toISOString();
};
