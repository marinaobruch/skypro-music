import React from "react";
import "./PlayList.css";
import Track from "../Track/Track";

export default function PlayList({ loading }) {
  return (
    <div className="content__playlist playlist">
      <Track
        loading={loading}
        track="Guilt"
        artist="Nero"
        album="Welcome Reality"
        time="4:44"
      />

      <Track
        loading={loading}
        track="Elektro"
        artist="Dynoro, Outwork, Mr. Gee"
        album="Elektro"
        time="2:22"
      />

      <Track
        loading={loading}
        track="I’m Fire"
        artist="Ali Bakgor"
        album="I’m Fire"
        time="2:22"
      />
      <Track
        loading={loading}
        track="Non Stop"
        modify="(Remix)"
        artist="Стоункат, Psychopath"
        album="
        Non Stop"
        time="4:12"
      />
      <Track
        loading={loading}
        track="Run Run"
        modify="(feat. AR/CO)"
        artist="Jaded, Will Clarke, AR/CO"
        album="Run Run"
        time="2:54"
      />
      <Track
        loading={loading}
        track="Eyes on Fire"
        modify="(Zeds Dead Remix)"
        artist="
        Blue Foundation, Zeds Dead"
        album="Eyes on Fire"
        time="5:20"
      />
      <Track
        loading={loading}
        track="Mucho Bien"
        modify="(Hi Profile Remix)"
        artist="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        album="Mucho Bien"
        time="3:41"
      />
      <Track
        loading={loading}
        track="Guilt"
        artist="Nero"
        album="Welcome Reality"
        time="4:44"
      />
      <Track
        loading={loading}
        track="Knives n Cherries"
        artist="minthaze"
        album="Captivating"
        time="1:48"
      />
    </div>
  );
}
