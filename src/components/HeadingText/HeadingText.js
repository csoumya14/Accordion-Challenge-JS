import { MainHeading, HeadingContainer } from './HeadingText.css';

const HeadingText = props => {
  return (
    <HeadingContainer>
      <MainHeading>{props.title}</MainHeading>
    </HeadingContainer>
  );
};

export default HeadingText;
