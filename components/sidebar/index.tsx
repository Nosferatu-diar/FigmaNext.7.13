// react-icons
import { BsMusicNoteList } from "react-icons/bs";
import { CiMusicNote1, CiPlay1 } from "react-icons/ci";
import { FaRadio } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="mt-2 px-5">
      <h1 className="text-xl font-bold my-2 pb-2">Discover</h1>
      <div className="flex flex-col *:w-full items-start *:cursor-pointer *:rounded-lg *:hover:text-white *:hover:bg-black">
        <button className="flex items-center gap-3 p-1.5">
          <CiPlay1 />
          Listen Now
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <CiMusicNote1 />
          Browse
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <FaRadio />
          Radio
        </button>
      </div>
      <h1 className="text-xl font-bold my-2 pt-4">Library</h1>
      <div className="flex flex-col *:w-full items-start *:cursor-pointer *:rounded-lg *:hover:text-white *:hover:bg-black">
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Playlists
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Songs
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Made for you
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Artists
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Albums
        </button>
      </div>
      <h1 className="text-xl font-bold my-2 pt-4">Playlists</h1>
      <div className="flex flex-col *:w-full items-start *:cursor-pointer *:rounded-lg *:hover:text-white *:hover:bg-black">
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Recently Added
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Recently Played
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Top Songs
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Top Albums
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Top Artists
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Logic Discography
        </button>
        <button className="flex items-center gap-3 p-1.5">
          <BsMusicNoteList />
          Bedtime Beats
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
