import React from "react";
import { Loader } from "../index";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocationOutline } from "react-icons/ti";
import { MdPeopleOutline } from "react-icons/md";
import { VscRepo } from "react-icons/vsc";
import { GoRepoForked } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { VscLaw } from "react-icons/vsc";
import { numFormatter } from "../../Utilities/numFormatter";

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
                className="bg-white p-5 my-11 flex-col w-56  rounded-lg  flex  justify-center items-center mx-auto"
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

function ReposCard({ data, isFetching, error }) {
  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className="grid gird-cols-1  lg:grid-cols-3 gap-10 ">
        {data?.map((item, index) => {
          return (
            <div key={item.id}>
              <Link to={`/repos/${item?.owner.login}/${item?.name}`}>
                <div className="bg-white w-56 p-5 my-11 flex-col  rounded-lg  flex  justify-center items-center mx-auto">
                  <div className="image mx-auto">
                    <img
                      src={item?.owner?.avatar_url}
                      alt="avatar"
                      width={200}
                      height={200}
                      className={"rounded-full"}
                    />
                  </div>

                  <div className="text-center px-6 ">
                    <h1
                      className="text-2xl capitalize
                    
                      break-words
                      w-[200px] text-center  font-extrabold
                
                    "
                    >
                      {item?.full_name}
                    </h1>
                    <p
                      className="text-sm
                  
                
                    "
                    >
                      {item?.description}
                    </p>
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
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

function RepoTopicsTags({ topics }) {
  return (
    <>
      <h2>
        {topics?.length > 0 && (
          <span className="text-sm capitalize font-extrabold">Topics</span>
        )}
      </h2>
      <div className="flex flex-row space-x-1   flex-wrap justify-center items-center">
        {topics?.map((item, index) => (
          <>
            <div
              key={index}
              className=" lg:w-1/3 my-3  w-full bg-slate-200 p-2 rounded-full"
            >
              {item}
            </div>
          </>
        ))}
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
      <div className="bg-white w-2/4  p-5 my-11 flex-col  flex  justify-center items-center mx-auto">
        <div className="image">
          <img
            src={data?.owner.avatar_url}
            alt="avatar"
            width={200}
            height={200}
            className={"rounded-full"}
          />
        </div>

        <div className="text-center px-6 py-5">
          <h1 className="text-2xl capitalize font-extrabold">
            <a href={data?.homepage} target="_blank" rel="noopener noreferrer">
              {data?.name}
            </a>
          </h1>

          <h1 className="text-xl capitalize font-normal">
            <a href={data?.html_url} target="_blank" rel="noopener noreferrer">
              {data?.full_name}
            </a>
          </h1>

          <p className="text-sm w-2/4 mx-auto">{data?.description}</p>

          <div className="text-center py-4 justify-between flex lg:flex-row flex-col">
            <a
              href={data?.forks_url}
              className="text-sm  font-extrabold flex  items-center space-x-2"
            >
              <GoRepoForked className="mr-2" />
              {numFormatter(data?.forks_count)} forks
            </a>

            <a
              href={data?.stargazers_url}
              className="text-sm  font-extrabold flex items-center"
            >
              <AiOutlineStar className="mr-2" />
              {numFormatter(data?.stargazers_count)} stars
            </a>

            <p className="text-sm  font-extrabold flex items-center">
              <AiFillEye className="mr-2" />
              {numFormatter(data.subscribers_count)} watching
            </p>

            {data?.license && (
              <a
                href={data?.license?.url}
                className="text-sm  font-extrabold flex items-center"
              >
                <VscLaw className="mr-2" />
                {numFormatter(data?.license.name)} stars
              </a>
            )}
          </div>

          <RepoTopicsTags topics={data?.topics} />
        </div>
      </div>
    </>
  );
}

function RepoContributors({ error }) {
 

  return (
    <>
      <h1 className="text-center">
        {
          <span className="text-xl text-center capitalize font-extrabold">
            Contributors
          </span>
        }
      </h1>

      {data?.map((item, index) => {
        return (
          <>
            <h1>{item?.login}</h1>
          </>
        );
      })}
      {/* <UsersCard data={data?.data} /> */}
    </>
  );
}

export { UsersCard, UserCard, ReposCard, RepoCard, RepoContributors };
