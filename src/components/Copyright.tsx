import dayjs from 'dayjs';

export default function Copyright() {
  return (
    <div className="text-gray-500 text-right text-sm">
      © bluemiv {dayjs().year()}. All Rights Reserved.
    </div>
  );
}
