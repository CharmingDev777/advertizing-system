import { DetailAd } from "@/types/ads";
import type { NextApiRequest, NextApiResponse } from "next/types";

export type DetailAdResponse = { ad: DetailAd } | { error: string } | null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DetailAdResponse>
) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET": {
      console.log("detail: ", id);
      const ad: DetailAd = {
        id: 52011541,
        img: "https://imageaws.popin.cc/ML/87fd5c62b1422b7c1c2623bc8e5960f7.png",
        img_width: 300,
        img_height: 250,
        title:
          "キャンプにBBQに！ アウトドアワインの決定版［イエローテイル］BE-PAL FOREST CAMPでも大人気！ AD（サッポロビール株式会社）",
        redirect_url:
          "https://www.bepal.net/archives/318749?utm_source=popinad&utm_medium=paid&utm_campaign=230615yellowtail_sgk&a0v5la7bquf89=d88568e161b45df470a9dc07b5d796f3&uy3ubftvh0u6o8=c21b7ad361d2d2e617418d16368b2761&tripid=c21b7ad361d2d2e617418d16368b2761&xnfrr0ncac=977&zsmoi87pih9=trace.popin.cc&lzzgnpz8d=6e22bb022cd37340eb88f5c2f2512e40",
        ad_company_name: "popin",
        site_company_name: "ORICON NEWS",
        site_company_url: "https://www.oricon.co.jp/",
        mobile: 0,
        position_top_per: 3271,
        position_left_per: 249,
        createtime: "2023-07-07 00:00:00",
        analysis: 1000,
        createtime_format: "7/7",
        position: "上-左",
        pasts: [
          { date: "2023-03-30 00:00:00", count: "0" },
          { date: "2023-03-31 00:00:00", count: "0" },
          { date: "2023-04-01 00:00:00", count: "0" },
          { date: "2023-04-02 00:00:00", count: "0" },
          { date: "2023-04-03 00:00:00", count: "0" },
          { date: "2023-04-04 00:00:00", count: "0" },
          { date: "2023-04-05 00:00:00", count: "0" },
          { date: "2023-04-06 00:00:00", count: "0" },
          { date: "2023-04-07 00:00:00", count: "0" },
          { date: "2023-04-08 00:00:00", count: "0" },
          { date: "2023-04-09 00:00:00", count: "0" },
          { date: "2023-04-10 00:00:00", count: "0" },
          { date: "2023-04-11 00:00:00", count: "0" },
          { date: "2023-04-12 00:00:00", count: "0" },
          { date: "2023-04-13 00:00:00", count: "0" },
          { date: "2023-04-14 00:00:00", count: "0" },
          { date: "2023-04-15 00:00:00", count: "0" },
          { date: "2023-04-16 00:00:00", count: "0" },
          { date: "2023-04-17 00:00:00", count: "0" },
          { date: "2023-04-18 00:00:00", count: "0" },
          { date: "2023-04-19 00:00:00", count: "0" },
          { date: "2023-04-20 00:00:00", count: "0" },
          { date: "2023-04-21 00:00:00", count: "0" },
          { date: "2023-04-22 00:00:00", count: "0" },
          { date: "2023-04-23 00:00:00", count: "0" },
          { date: "2023-04-24 00:00:00", count: "0" },
          { date: "2023-04-25 00:00:00", count: "0" },
          { date: "2023-04-26 00:00:00", count: "0" },
          { date: "2023-04-27 00:00:00", count: "0" },
          { date: "2023-04-28 00:00:00", count: "0" },
          { date: "2023-04-29 00:00:00", count: "0" },
          { date: "2023-04-30 00:00:00", count: "0" },
          { date: "2023-05-01 00:00:00", count: "0" },
          { date: "2023-05-02 00:00:00", count: "0" },
          { date: "2023-05-03 00:00:00", count: "0" },
          { date: "2023-05-04 00:00:00", count: "0" },
          { date: "2023-05-05 00:00:00", count: "0" },
          { date: "2023-05-06 00:00:00", count: "0" },
          { date: "2023-05-07 00:00:00", count: "0" },
          { date: "2023-05-08 00:00:00", count: "0" },
          { date: "2023-05-09 00:00:00", count: "0" },
          { date: "2023-05-10 00:00:00", count: "0" },
          { date: "2023-05-11 00:00:00", count: "0" },
          { date: "2023-05-12 00:00:00", count: "0" },
          { date: "2023-05-13 00:00:00", count: "0" },
          { date: "2023-05-14 00:00:00", count: "0" },
          { date: "2023-05-15 00:00:00", count: "0" },
          { date: "2023-05-16 00:00:00", count: "0" },
          { date: "2023-05-17 00:00:00", count: "0" },
          { date: "2023-05-18 00:00:00", count: "0" },
          { date: "2023-05-19 00:00:00", count: "0" },
          { date: "2023-05-20 00:00:00", count: "0" },
          { date: "2023-05-21 00:00:00", count: "0" },
          { date: "2023-05-22 00:00:00", count: "0" },
          { date: "2023-05-23 00:00:00", count: "0" },
          { date: "2023-05-24 00:00:00", count: "0" },
          { date: "2023-05-25 00:00:00", count: "0" },
          { date: "2023-05-26 00:00:00", count: "0" },
          { date: "2023-05-27 00:00:00", count: "0" },
          { date: "2023-05-28 00:00:00", count: "0" },
          { date: "2023-05-29 00:00:00", count: "0" },
          { date: "2023-05-30 00:00:00", count: "0" },
          { date: "2023-05-31 00:00:00", count: "0" },
          { date: "2023-06-01 00:00:00", count: "0" },
          { date: "2023-06-02 00:00:00", count: "0" },
          { date: "2023-06-03 00:00:00", count: "0" },
          { date: "2023-06-04 00:00:00", count: "0" },
          { date: "2023-06-05 00:00:00", count: "0" },
          { date: "2023-06-06 00:00:00", count: "0" },
          { date: "2023-06-07 00:00:00", count: "0" },
          { date: "2023-06-08 00:00:00", count: "0" },
          { date: "2023-06-09 00:00:00", count: "0" },
          { date: "2023-06-10 00:00:00", count: "0" },
          { date: "2023-06-11 00:00:00", count: "0" },
          { date: "2023-06-12 00:00:00", count: "0" },
          { date: "2023-06-13 00:00:00", count: "0" },
          { date: "2023-06-14 00:00:00", count: "0" },
          { date: "2023-06-15 00:00:00", count: "28" },
          { date: "2023-06-16 00:00:00", count: "40" },
          { date: "2023-06-17 00:00:00", count: "58" },
          { date: "2023-06-18 00:00:00", count: "45" },
          { date: "2023-06-19 00:00:00", count: "59" },
          { date: "2023-06-20 00:00:00", count: "44" },
          { date: "2023-06-21 00:00:00", count: "30" },
          { date: "2023-06-22 00:00:00", count: "40" },
          { date: "2023-06-23 00:00:00", count: "40" },
          { date: "2023-06-24 00:00:00", count: "46" },
          { date: "2023-06-25 00:00:00", count: "53" },
          { date: "2023-06-26 00:00:00", count: "41" },
          { date: "2023-06-27 00:00:00", count: "27" },
          { date: "2023-06-28 00:00:00", count: "48" },
          { date: "2023-06-29 00:00:00", count: "13" },
          { date: "2023-06-30 00:00:00", count: "16" },
          { date: "2023-07-01 00:00:00", count: "39" },
          { date: "2023-07-02 00:00:00", count: "22" },
          { date: "2023-07-03 00:00:00", count: "32" },
          { date: "2023-07-04 00:00:00", count: "37" },
          { date: "2023-07-05 00:00:00", count: "37" },
          { date: "2023-07-06 00:00:00", count: "41" },
          { date: "2023-07-07 00:00:00", count: "1" },
        ],
      };

      return res.status(200).json({ ad });
    }
    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
