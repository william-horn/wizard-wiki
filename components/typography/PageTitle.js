import constructClassName from "../../lib/helpers/constructClassName";

const PageTitle = ({ children, add, remove }) => {
  return (
    <h1 className={constructClassName('p-8 pb-6 text-5xl font-bold text-center text-main-title', {add, remove})}>
      {children}
    </h1>
  );
};

export default PageTitle;