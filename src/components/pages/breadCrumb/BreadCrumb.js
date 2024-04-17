import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();

  const { pathname } = location;

  const pathnames = pathname.split("/").filter((item) => item);
  const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className={pathnames.length > 0 ? "breadcrumb" : "displaynone"}>
      {pathnames.length > 0 && <Link to="/">Home</Link>}

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

        return index === pathnames.length - 1 ? (
          <>
            /
            <div key={index + 1} className="isComponent">
              {capatilize(name)}
            </div>
          </>
        ) : (
          <>
            /
            <div key={index + 2}>
              <Link to={`${routeTo}`}>{capatilize(name)}</Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
