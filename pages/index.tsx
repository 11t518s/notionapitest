import { Client } from '@notionhq/client';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const notionApiTest = async () => {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const notionData = axios.get();
    console.log(notionData);
    console.log(notion);

    // const listUsersResponse = await notion.users.list({});

    // console.log(listUsersResponse);
    console.log('test3');
  };

  notionApiTest();

  return <>test!!</>;
}
