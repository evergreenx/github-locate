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
      <div class="grid gird-cols-1 lg:grid-cols-4 gap-8 ">
        {data &&
          data?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white p-5 my-11 flex-col w-56 shadow-2xl rounded-lg  flex  justify-center items-center mx-auto"
              >
                <Link to={`/users/${item.login}`}>
                  <div class="image">
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
        <div class="image">
          <img
            src={data?.avatar_url}
            alt="avatar"
            width={200}
            height={200}
            className={"rounded-full"}
          />
        </div>

        <div className="text-center px-6">
          <h1 className="text-2xl capitalize font-extrabold">{data?.login}</h1>
          <p className="text-sm">{data?.bio}</p>
        </div>

        <div class="user-details">
          <div className="text-center px-6">
            <h1 className="text-2xl capitalize font-extrabold">
              {data?.public_repos}
            </h1>
          </div>

          <div class="follow flex items-center py-2">
            <VscRepo />

            {data?.public_repos && (
              <div className="text-center px-6">
                <span className="text-sm capitalize font-extrabold">
                  {data?.public_repos} Repos
                </span>
              </div>
            )}
          </div>

          <div class="email flex items-center py-2">
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

          <div class="location flex items-center py-2">
            <TiLocationOutline />

            {data?.location ? (
              <div className="text-center px-6">
                <span className="text-sm capitalize font-extrabold">
                  {data?.location}
                </span>
              </div>
            ) : (
              <div className="text-center px-6">
                <h1 className="text-sm capitalize font-extrabold">No Email</h1>
              </div>
            )}
          </div>

          <div class="follow flex items-center py-2">
            <MdPeopleOutline />

            {data?.followers && (
              <div className="text-center px-6">
                <span className="text-sm capitalize font-extrabold">
                  {data?.followers} followers
                </span>
                .
                <span className="text-sm capitalize font-extrabold">
                  {data?.following} following
                </span>
              </div>
            )}
          </div>
"
          <buuton className="">
            <Link to={data.htmlUrl}>
              
              View 

              </Link>

          </buuton>
        </div>
      </div>
    </>
  );
}

export { UsersCard, UserCard };
