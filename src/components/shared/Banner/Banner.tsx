import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[60%] rounded-xl text-center bg-white px-16 py-20">
          <p className="w-40 mx-auto rounded-full p-2 my-5 bg-teal-100 text-teal-600">
            1st January 2025
          </p>
          <h1 className="text-4xl text-gray-700 font-bold ">The Rise of Quantum Computing</h1>
          <p className="text-gray-500 mt-3 w-3/4 mx-auto">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
