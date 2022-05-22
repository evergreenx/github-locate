import React from "react";
import { Loader } from "../index";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocationOutline } from "react-icons/ti";
import { MdPeopleOutline } from "react-icons/md";
import { VscRepo } from "react-icons/vsc";

function UsersCard({ data, isFetching, error }) {
  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        {data &&
          data?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white p-5 my-11 flex-col w-56 shadow-2xl rounded-lg  flex  justify-center items-center mx-auto"
              >
                <Link to={`/users/${item.login}`}>
                  <div className="image">
                    <img
                      src={item?.avatar_url}
                      alt="avatar"
                      width={200}
                      height={200}
                      className={"rounded-full"}
                    />
                  </div>

                  <div className="text-center px-6">
                    <h1 className="text-2xl capitalize font-extrabold">
                      {item?.login}
                    </h1>
                    <p className="text-sm">{data?.bio}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

function UserCard({ data, isFetching, error }) {
  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className="bg-white p-5 my-11 flex-col  rounded-lg  flex  justify-center items-center mx-auto">
        <div className="image">
          <img
            src={data?.avatar_url}
            alt="avatar"
            width={200}
            height={200}
            className={"rounded-full"}
          />
        </div>

        <div className="text-center px-6 py-5">
          <h1 className="text-2xl capitalize font-extrabold">{data?.name}</h1>

          <h1 className="text-xl capitalize font-normal">{data?.login}</h1>

          <p className="text-sm">{data?.bio}</p>
        </div>

        <div className="user-details">
          <div className="text-center px-6"></div>
          <div className="follow flex  items-center py-2">
            <VscRepo />

            {
              <div className="text-center px-6">
                <span className="text-sm capitalize font-extrabold">
                  {data?.public_repos && data?.public_repos} Repos
                </span>
              </div>
            }
          </div>
          <div className="email flex items-center py-2">
            <HiOutlineMail />

            {data?.email ? (
              <div className="text-center px-6">
                <span className="text-sm capitalize font-extrabold">
                  {data?.email}
                </span>
              </div>
            ) : (
              <div className="text-center px-6">
                <h1 className="text-sm capitalize font-extrabold">No Email</h1>
              </div>
            )}
          </div>
          <div className="location flex items-center py-2">
            <TiLocationOutline />

            {data?.location && (
              <div className="text-center px-6">
                <span className="text-sm capitalize font-extrabold">
                  {data?.location}
                </span>
              </div>
            )}
          </div>
          <div className="follow flex items-center py-2">
            <MdPeopleOutline />

            <div className="text-center px-6">
              <span className="text-sm capitalize font-extrabold">
                {data?.followers && data?.followers} followers
              </span>
              ..
              <span className="text-sm capitalize font-extrabold">
                {data?.following && data?.following} following
              </span>
            </div>
          </div>

          <button className="shadow-amber-100 p-3 mx-auto flex justify-center items-center text-white font-bold  bg-black shadow-lg rounded-lg">
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              View on Github
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

function RepoCard({ data, isFetching, error }) {
  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className="grid gird-cols-1 lg:grid-cols-4 gap-8 ">
        {data?.map((item, index) => {
          return (
            <>
              <div className="bg-white p-5 my-11 flex-col  rounded-lg  flex  justify-center items-center mx-auto">
                <Link to={`/repos/${item?.owner.login}/${item?.name}`}>
                  <div className="image">
                    <img
                      src={item?.owner?.avatar_url}
                      alt="avatar"
                      width={200}
                      height={200}
                      className={"rounded-full"}
                    />
                  </div>
                </Link>
                <div className="text-center px-6">
                  <h1 className="text-2xl capitalize font-extrabold">
                    {item?.full_name}
                  </h1>
                  <p className="text-sm">{item?.description}</p>
                </div>

                <div className="user-details">
                  <div className="text-center px-6">
                    <span className="text-sm capitalize font-extrabold">
                      {item?.language}
                    </span>
                  </div>

                  {/* <div className="h2">{item?.description}</div> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export { UsersCard, UserCard, RepoCard };
