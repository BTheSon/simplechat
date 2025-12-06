using System.Text.Json;

namespace simplechat.Objects;

public abstract class Serializable {

	private static JsonSerializerOptions? jsonSerializerOptions = null;

	private static JsonSerializerOptions GetJsonSerializerOptions() {
		return jsonSerializerOptions ??= new JsonSerializerOptions {
			IncludeFields = true
		};
	}

	public virtual string ToJson() {
		return JsonSerializer.Serialize(this, GetType(), GetJsonSerializerOptions());
	}

}