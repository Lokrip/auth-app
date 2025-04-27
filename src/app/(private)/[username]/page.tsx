export default async function ProfilePage({
    params
}: {
    params: Promise<{ username: string }>
}) {
    const { username } = await params;
    return (
        <div>
            Profile Page <span>{username}</span>
        </div>
    )
}
