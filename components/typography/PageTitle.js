import constructClassName from "../../lib/helpers/constructClassName";

const PageTitle = ({ children, className, remove }) => {
  return (
    <h1 className={constructClassName('p-8 pb-6 text-5xl font-bold text-center text-main-title', {className, remove})}>
      {children}
    </h1>
  );
};

export default PageTitle;