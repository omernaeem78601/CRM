import { toAbsoluteUrl } from '../../_metronic/helpers';

const Image = ({ gender }) => {
  const imageSource =
    gender === 'male'
      ? toAbsoluteUrl('/media/svg/avatars/001-boy.svg')
      : toAbsoluteUrl('/media/svg/avatars/014-girl-7.svg');

  return (
      <img src={imageSource} alt="Metornic" />
  );
};
export default Image;

export const UserProfileImage = ({ profileImagePath, gender,width }) => {
  const baseUrl = process.env.REACT_APP_IMAGE_URL;
  if (profileImagePath) {
    return <img src={`${profileImagePath}`} alt='Profile' style={{ width: width }} />;
  } else {
    const defaultImage =
      gender === 'male'
        ? '/media/svg/avatars/001-boy.svg'
        : gender === 'female'
        ? '/media/svg/avatars/014-girl-7.svg'
        : '/media/svg/avatars/001-boy.svg';

    return <img src={toAbsoluteUrl(defaultImage)} alt={gender} style={{ width: width }} />;
  }
};






