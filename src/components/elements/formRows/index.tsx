
const FormTitle = function ({ theme, children }) {
  const Theme = theme;
  return (
    <>
      <div
        className="Heading block-area theme-light | grid cols-12 dir-row align-stretch gap-5 sm:gap-0 gap-br-3"
        p="struct"
      >
        <div b="true"></div>
        <div c="true">
          <div className="Spacer col-span-4 sm:hidden" p="struct"></div>

          <div className={`${Theme.Title} col-span-8 sm:col-span-12`} p="text">
            <div c="true">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const FormItem = function ({ theme, props }) {
  const Theme = theme;

  let IconPre, IconPos, IconAlignment;
  if (props.pre) {
    if (props.pre.icon) {
      IconPre = props.pre.icon;
    }
  }
  if (props.pos) {
    if (props.pos.icon) {
      IconPos = props.pos.icon;
    }
  }
  if (props.textarea) {
    IconAlignment = "align-start";
  } else {
    IconAlignment = "align-center";
  }

  return (
    <div
      className="Item SA | grid cols-12 dir-row align-start gap-5 sm:gap-0 gap-br-3"
      p="struct"
    >
      <div b="true"></div>
      <div c="true">
        <div
          className="InputLabel bel pad-r-0 pad-b-0 pad-l-0 col-span-4 sm:col-span-12 | flex dir-row align-stasrt justify-end sm:justify-start"
          p="struct"
        >
          <div c="true">
            <div className={`${Theme.Desc} text-align-right sm:text-align-left `} p="text">
              <div c="true">{props.label}</div>
            </div>
          </div>
        </div>

        <div
          className="InputWrapper col-span-8 sm:col-span-12  A4 SA pad-0 box sh-op-0 group ch-border-join | board bg-C0 | flex dir-row "
          p="struct"
        >
          <div b="true"></div>
          <div c="true">
            {props.pre && (
              <div
                p="struct"
                className={`bel y-compact | border bd-side-all bd-C0 bd-tom-85 bd-w-2rem | C4 c-op-70 bg-C0 bg-tom-0 bg-op-10  | flex dir-row ${IconAlignment} `}
              >
                <div b="true"></div>
                <div c="true">
                  {props.pre.icon && (
                    <IconPre className="fill-current" p="icon" />
                  )}
                  {props.pre.text && (
                    <div className="" p="text">
                      <div c="true">{props.pre.text}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {props.input && (
              <input
                id={props.id}
                className="bel | y-compact border bd-side-all bd-C0 bd-tom-85 h:bd-C1 bd-w-2rem bg-C0 bg-op-0"
                placeholder={props.input.placeholder}
                name={props.input.name}
                required={props.input.required}
                p="input"
              />
            )}

            {props.select && (
              <select
                id={props.id}
                className="bel | y-compact border bd-side-all bd-C0 bd-tom-85 h:bd-C1 bd-w-2rem bg-C0 bg-op-0"
                name={props.select.name}
                required={props.select.required}
                p="input"
              >
                {props.select.options.map(({ value, selected, name }, i) => {
                  return (
                    <option value={value} key={i} selected={selected}>
                      {name}
                    </option>
                  );
                })}
              </select>
            )}

            {props.textarea && (
              <textarea
                id={props.id}
                className="bel | y-compact border bd-side-all bd-C0 bd-tom-85 h:bd-C1 bd-w-2rem bg-C0 bg-op-0"
                placeholder={props.textarea.placeholder}
                name={props.textarea.name}
                required={props.textarea.required}
                style={{
                  minHeight: props.textarea.minHeight,
                  maxHeight: props.textarea.maxHeight,
                }}
                p="input"
              ></textarea>
            )}

            {props.pos && (
              <div
                p="struct"
                className="bel y-compact | border bd-side-all bd-C0 bd-tom-85 bd-w-2rem | C4 c-op-70 bg-C0 bg-tom-0 bg-op-10  | flex dir-row align-center  "
              >
                <div b="true"></div>
                <div c="true">
                  {props.pos.icon && (
                    <IconPos className="fill-current" p="icon" />
                  )}
                  {props.pos.text && (
                    <div className="" p="text">
                      <div c="true">{props.pos.text}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



export {FormTitle, FormItem};