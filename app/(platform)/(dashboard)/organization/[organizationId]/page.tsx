const OrganizationIdPage = ({
  params,
}: {
  params: { organizationId: string };
}) => {
  return (
    <div className="mt-20">OrganizationIdPage:{params.organizationId}</div>
  );
};

export default OrganizationIdPage;
