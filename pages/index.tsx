import { Client } from '@notionhq/client';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const notionApiTest = async () => {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const notionData = axios.get(
      `https://api.notion.com/v1/databases/06428267693b499e81de9b68df43bf43`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          'Notion-Version': '2022-01-06',
        },
      },
    );
    console.log(notionData);
    console.log(notion);

    // const listUsersResponse = await notion.users.list({});

    // console.log(listUsersResponse);
    console.log('test3');
  };

  notionApiTest();

  return <>test!!</>;
}
