export default function Comp(props) {
  const { children, logoSize } = props;

  return (
    <div
      className="A0 box pad-v-2 | board bg-C0D | grid dir-row cols-12 gap-3"
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <div className="A2 col-span-8 | | grid dir-col gap-4 " p="struct">
          <div b="true"></div>
          <div c="true">
            <div className="A2 box | board bg-C0 | " p="struct">
              <div b="true"></div>
              <div c="true">
                <div className="A5 box | board bg-C1" p="struct">
                  <div b="true"></div>
                  <div c="true">
                    <a p="text" style={{ color: "#333" }}>
                      {children}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="A2 box | board bg-C0 | " p="struct">
              <div b="true"></div>
              <div c="true">
                <div className="A5 box | board bg-C1" p="struct">
                  <div b="true"></div>
                  <div c="true">
                    <a p="text" style={{ color: "#333" }}>
                      Components
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="A4  col-span-4  |  grid dir-col gap-4 " p="struct">
          <div b="true"></div>
          <div c="true">
            <div className="A4 box | board bg-C0 | " p="struct">
              <div b="true"></div>
              <div c="true">
                <div className="A5 box | board bg-C1" p="struct">
                  <div b="true"></div>
                  <div c="true">
                    <a p="text" style={{ color: "#333" }}>
                      Components
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
