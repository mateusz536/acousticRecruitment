import parse from "html-react-parser";
import { BASE_URL } from "../service";
import * as S from "./item.styled";

const Item = ({ data }) => {
  const { heading, body, mainImage, date, author } = data.elements;
  const articleDate = new Date(date.value).toLocaleString();
  return (
    <S.Main>
      <S.MainHeading>{heading.value}</S.MainHeading>
      <S.ArticleInfo>
        <b>{author.value} </b>
        {articleDate}
      </S.ArticleInfo>
      <div className="content-body">
        {body.values.map((el, i) => (
          <div key={i}>{parse(el)}</div>
        ))}
      </div>
      <div>
        <S.Img
          src={`${BASE_URL}${mainImage.value.leadImage.asset.resourceUri}`}
          alt={mainImage.value.leadImage.asset.altText}
        ></S.Img>
      </div>
    </S.Main>
  );
};

export default Item;
