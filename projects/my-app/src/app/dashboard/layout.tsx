/*
 * @Descripttion: /dashboard 布局文件
 * @Author: 颜博骏 bojun@ssc-hn.com
 * @Date: 2024-07-03
 * @LastEditors: 颜博骏 bojun@ssc-hn.com
 * @LastEditTime: 2024-07-03
 */
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section>
        <div>我是/dashboard的layout文件的标签</div>
        {children}
      </section>
    )
  }