"use client";

import {
  TwitterShareButton,
  XIcon,
  LineShareButton,
  LineIcon
} from "react-share"

type Props = {
  url: string;
  title: string;
  author: string;
};

export default function ShareButtons({url, title,  author}: Props) {
  const shareText = `「${title}」by ${author} --ハワイ記事投稿アプリ「Aloha memories」より`;

  return (
    <div className="shareButtons">
      {/* X(Twitter) */}
      <div className="shareButton">
        <TwitterShareButton url={url} title={shareText}>
          <XIcon size={40} round />
        </TwitterShareButton>
      </div>

      {/* LINE */}
      <div className="shareButton">
        <LineShareButton url={url} title={shareText}>
          <LineIcon size={40} round/>
        </LineShareButton>
      </div>
    </div>
  )
}
