This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Description of our project "Selena":

We have our website here “Selena” where we have created a 3d moon globe. Where we can zoom in and zoom out the globe by clicking on the buttons given below as well as using our mouse pointers. We can stop the rotation of the globe using a button. We can also rotate it with our mouse. Here we can see that we have the positions of landing sites of Apollo lunar modules plotted on our globe. When we click the points we would get their latitudes and longitudes on the popover.

From the sidebar, we can choose the different types of moonquakes. By clicking deep moonquake it will pinpoint all the locations where a deep moonquake occurred. Similarly goes for shallow moonquakes, meteorite hits, and artificial impacts. We can know the latitudes and longitudes of the quake positions just by hovering over the points. There is also an option “Learn Moonquake” where we can find every information related to moonquakes.

We are also trying to use the Obspy package to generate time series from the seismic data we got from the JAXA API.


Homepage            |  Apollo Lunar Modules information     
:-------------------------:|:-------------------------:
<img width="951" alt="moonquakeLunar" src="https://user-images.githubusercontent.com/52793150/193386012-7e55f048-9f7a-4319-a381-6b32698db19e.PNG">|<img width="950" alt="moonquakeHover" src="https://user-images.githubusercontent.com/52793150/193386031-335dd8b9-cfb7-483e-8a73-bc359a40b6dc.png">

Deep Moonquakes            |  Shallow Moonquakes     
:-------------------------:|:-------------------------:
<img width="956" alt="DeepMoonQuake" src="https://user-images.githubusercontent.com/52793150/193386418-784f7691-143a-46e0-b567-e6638b11057a.png">|<img width="956" alt="ShallowMoonquake" src="https://user-images.githubusercontent.com/52793150/193386431-db77d22e-9d6e-47be-82d3-9fffe2a85c52.PNG">

Meteorite Impact            |  Learning Section     
:-------------------------:|:-------------------------:
![metrt](https://user-images.githubusercontent.com/52793150/193386486-2493e226-2e01-47f7-af0f-f8fb14bbc829.png)|![wes](https://user-images.githubusercontent.com/52793150/193386525-3a113a7e-33e9-491d-a339-320c6eca7f84.png)

