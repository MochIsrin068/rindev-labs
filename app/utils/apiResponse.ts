export const reconstructWorkData = (data: Array<any>) => {
  const constructData =
    data?.map((item: any) => ({
      id: item.id,
      description: item.attributes.description,
      responsibilities: item.attributes.responsibilities,
      position: item.attributes.position,
      company: {
        name: item.attributes.companyName,
        picture: item.attributes.companyPicture.data.attributes.url,
      },
      startDate: item.attributes.startDate,
      finishDate: item.attributes.finishDate,
      isPresent: item.attributes.isPresent,
    })) || [];

  return constructData;
};

export const reconstructContactData = (data: Array<any>) => {
  const constructData =
    data?.map((item: any) => ({
      id: item.id,
      link: item?.attributes?.link,
      name: item?.attributes?.name,
      imageUrl: item?.attributes?.image?.data?.attributes?.url,
    })) || [];
  return constructData;
};

export const reconstructProjectData = (data: Array<any>) => {
  const constructData =
    data?.map((item: any) => ({
      id: item.id,
      title: item?.attributes?.title,
      description: item?.attributes?.description,
      projectUrl: item?.attributes?.projectUrl,
      image: item?.attributes?.image?.data?.attributes?.url,
      techStacks: item?.attributes?.techStacks?.data?.map((stack: any) => ({
        id: stack?.id,
        name: stack?.attributes?.name,
        image: stack?.attributes?.url,
      })),
    })) || [];
  return constructData;
};

export const reconstructSnippetData = (data: Array<any>) => {
  const constructData =
    data?.map((item: any) => ({
      id: item.id,
      title: item.attributes.title,
      subtitle: item.attributes.subtitle,
      code: item.attributes.code,
      techStacks: item?.attributes?.techStacks?.data?.map((stack: any) => ({
        id: stack?.id,
        name: stack?.attributes?.name,
        image: stack?.attributes?.url,
      })),
    })) || [];
  return constructData;
};
